import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from '../redux/balanceSlice';
import { useState } from 'react';

export default function Balance() {
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();
  const value = useSelector(state => state.balance.value);

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
      <button onClick={handleDeposit}>Deposit {inputValue}</button>
      <button onClick={handleWithdraw}>Withdraw {inputValue}</button>
    </div>
  );
}
