import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
    return (
        <div className={css.container}>
            <p className={css.searchText}>Find contact by name</p>
            <input
                className={css.searchInput}
                type="text"
                value={value}
                onChange={event => onFilter(event.target.value)}
            />
        </div>
    );
}
