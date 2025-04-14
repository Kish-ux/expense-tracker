function SearchBar({ onSearch }) {
    return (
      <div className="searchBar">
        <input
          type="search"
          id="search"
          placeholder="search expense.."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
  export default SearchBar;