import css from "./TextInput.module.css";

export default function TextInput({ text, onType }) {
  const handleChange = (event) => {
    onType(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      <span>Text input</span>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}
