import { useId } from "react";
import css from "./TextFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTextFilter, selectTextFilter } from "../../redux/filtersSlice";

export default function TextFilter() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectTextFilter);

  return (
    <div className={css.wrapper}>
      <label htmlFor={id}>
        <b>Filter by text</b>
      </label>
      <input
        className={css.field}
        type="text"
        id={id}
        value={filter}
        onChange={e => dispatch(changeTextFilter(e.target.value))}
      />
    </div>
  );
}
