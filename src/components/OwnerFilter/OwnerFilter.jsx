import css from './OwnerFilter.module.css';

export default function OwnerFilter({ filter, onSearch }) {
  return (
    <div className={css.wrapper}>
      Filter by owner
      <input
        type="text"
        value={filter}
        onChange={e => onSearch(e.target.value)}
      />
    </div>
  );
}
