import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw, selectBalance } from '../redux/balanceSlice';

export default function Balance() {
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();
  const value = useSelector(selectBalance);

  const handleDeposit = () => {
    dispatch(deposit(inputValue));
  };

  const handleWithdraw = () => {
    dispatch(withdraw(inputValue));
  };

  return (
    <div>
      <p>Balance: {value}</p>
      <input
        type="number"
        value={inputValue}
        onChange={e => setInputValue(Number(e.target.value))}
      />
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
