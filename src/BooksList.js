import React from 'react';
import Book from './Book';

export const BooksList = (props) => {
  const { books, query, handleStatusChange } = props;
  const searchedBooks = query === '' ? [] : books.filter((b) => (
    b.status.toLowerCase().includes(query.toLowerCase())
    ));
  
  console.log("These are the props in BookList: ", props);
 return (
  <div className="search-books">
    <div className="search-books-results">
      <ol className="books-grid">
      { searchedBooks.map((book) => (
        <Book 
        key={book.bookId}
        {...book} 
        handleStatusChange={handleStatusChange}
        />
      ))}
      </ol>
    </div>
  </div>
)
};
