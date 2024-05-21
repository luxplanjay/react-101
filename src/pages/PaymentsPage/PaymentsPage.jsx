import { useEffect, useState } from 'react';
import PaymentList from '../../components/PaymentList/PaymentList';
import { getPayments } from '../../payments-api';

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPayments()
      .then(data => setPayments(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Payments Page</h2>
      {loading && <b>Loading payments...</b>}
      {payments.length > 0 && <PaymentList payments={payments} />}
    </div>
  );
}
