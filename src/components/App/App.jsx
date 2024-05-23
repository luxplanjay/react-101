import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import css from './App.module.css';

const BankInfo = lazy(() => import('../BankInfo'));
const PaymentReceipt = lazy(() => import('../PaymentReceipt'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const PaymentsPage = lazy(() =>
  import('../../pages/PaymentsPage/PaymentsPage')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage')
);
const PaymentDetailsPage = lazy(() =>
  import('../../pages/PaymentDetailsPage/PaymentDetailsPage')
);

export default function App() {
  return (
    <div className={css.container}>
      <h1>Routing in React</h1>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
            <Route path="bank" element={<BankInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
