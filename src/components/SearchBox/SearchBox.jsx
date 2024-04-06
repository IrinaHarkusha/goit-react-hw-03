import s from "./SearchBox.module.css";

function SearchBox({ searchStr, setSearch }) {
  return (
    <div className={s.wrap}>
      <h2>Find contacts by name</h2>
      <input
        value={searchStr}
        onChange={(e) => setSearch(e.target.value)}
        className={s.input}
        type="text"
        placeholder="Enter contact name..."
      />
    </div>
  );
}

export default SearchBox;
