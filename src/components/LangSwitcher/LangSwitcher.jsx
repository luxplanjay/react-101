import css from "./LangSwitcher.module.css";

export default function LangSwitcher({ lang, onSelect }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      <span>Lang switcher</span>
      <select value={lang} onChange={handleChange}>
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
