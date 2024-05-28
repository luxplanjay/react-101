import { useSelector } from 'react-redux';
import Balance from './Balance';
import LangSwitcher from './LangSwitcher';

export default function App() {
  const lang = useSelector(state => state.locale.lang);

  return (
    <div>
      <h1>State management with Redux</h1>
      <Balance />

      <LangSwitcher />
      <p>Current lang: {lang}</p>
    </div>
  );
}
