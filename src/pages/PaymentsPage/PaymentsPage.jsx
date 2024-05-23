import { useEffect, useState } from 'react';
import PaymentList from '../../components/PaymentList/PaymentList';
import { getPayments } from '../../payments-api';
import OwnerFilter from '../../components/OwnerFilter/OwnerFilter';
import { useSearchParams } from 'react-router-dom';

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParms, setSearchParams] = useSearchParams();
  const ownerFilter = searchParms.get('owner') ?? '';

  const changeOwnerFilter = newFilter => {
    searchParms.set('owner', newFilter);
    setSearchParams(searchParms);
  };

  useEffect(() => {
    setLoading(true);
    getPayments()
      .then(data => setPayments(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredPayments = payments.filter(payment =>
    payment.cardOwner.toLowerCase().includes(ownerFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Payments Page</h2>
      <OwnerFilter filter={ownerFilter} onSearch={changeOwnerFilter} />
      {loading && <b>Loading payments...</b>}
      {filteredPayments.length > 0 && (
        <PaymentList payments={filteredPayments} />
      )}
    </div>
  );
}
