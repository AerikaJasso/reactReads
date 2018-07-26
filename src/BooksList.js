import React from 'react';
import Book from './Book';

export const BooksList = (props) => {
  const { books, query, handleStatusChange, results } = props;
  // const searchedBooks = query === '' ? [] : books.filter((b) => (
  //   b.status.toLowerCase().includes(query.toLowerCase())
  //   ));
  
  console.log("These are the props in BookList: ", props);
 return (
  <div className="search-books">
    <div className="search-books-results">
      <ol className="books-grid">
      { results.map((result, index) => (
        <Book 
        key={index}
        {...result} 
        handleStatusChange={handleStatusChange}
        />
      ))}
      </ol>
    </div>
  </div>
)
};
