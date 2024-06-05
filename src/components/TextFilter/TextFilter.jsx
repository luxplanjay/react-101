import { useId } from "react";
import css from "./TextFilter.module.css";

export default function TextFilter() {
  const id = useId();

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input className={css.field} type="text" id={id} />
    </div>
  );
}
