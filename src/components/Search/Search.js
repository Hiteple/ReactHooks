const Search = ({searchInput, search, handleSearch}) => {
   return (
      <div>
         <input ref={searchInput} type="text" value={search} onChange={handleSearch} />
      </div>
   );
}

export default Search;