
const SearchBox = ({ searchStr, setSearch }) => {
  return (
    <div>
      <input value={searchStr} onChange={e => setSearch(e.target.value)} className="input" type='text' placeholder="Enter contact name..." />
    </div>
  )
}

export default SearchBox
