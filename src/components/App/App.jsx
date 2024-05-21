import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../../pages/HomePage/HomePage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import PaymentsPage from '../../pages/PaymentsPage/PaymentsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PaymentDetailsPage from '../../pages/PaymentDetailsPage/PaymentDetailsPage';
import BankInfo from '../BankInfo';
import PaymentReceipt from '../PaymentReceipt';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1>Routing in React</h1>
      <Navigation />

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
    </div>
  );
}
