import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getPaymentById } from '../../payments-api';
import PaymentInfo from '../../components/PaymentInfo';

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? '/payments');
  // console.log('PaymentDetailsPage:', backLinkRef);

  useEffect(() => {
    setLoading(true);
    getPaymentById(paymentId)
      .then(data => setPayment(data))
      .finally(() => setLoading(false));
  }, [paymentId]);

  return (
    <div>
      <h2>Payment Details {paymentId}</h2>
      <p>
        <b>
          <Link to={backLinkRef.current}>Go back</Link>
        </b>
      </p>

      {loading && <b>Loading payment info...</b>}
      {payment && <PaymentInfo payment={payment} />}

      <ul>
        <li>
          <NavLink to="bank">Bank info</NavLink>
        </li>
        <li>
          <NavLink to="receipt">Receipt</NavLink>
        </li>
      </ul>

      <Suspense fallback={<div>Loading sub component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
