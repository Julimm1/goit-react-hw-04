const SearchBar = ({ handleSubmit, setQuery }) => {
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
