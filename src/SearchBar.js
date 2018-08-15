import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
  const { query, getBooks, searchQuery } = props;
  
  const handleSearchQuery = (query) => {
    searchQuery(query);
  };
  
  return(
    <div className="search-books-bar">
        <Link
          className="close-search"
          to='/'
          ref={getBooks}
        >
        Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
          type="text" 
          placeholder="Search by title or author"
          value={query}
          onChange={(event) => handleSearchQuery(event.target.value)}  
          />
        </div>
      </div>
  );
  

}

export default SearchBar;