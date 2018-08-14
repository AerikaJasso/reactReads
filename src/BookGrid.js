import React from 'react';
import Book from './Book';
import Message from './Message';

const BookGrid = (props) => {
  const { updateBookShelf, query, searchedBooks } = props;

  let filteredBooks
  if(query && query.length > 0 && !searchedBooks.hasOwnProperty('error')) {
    filteredBooks = searchedBooks.filter((book) => (book.title || book.authors))
  }

 return (
  <div className="search-books">
    <div className="search-books-results">
      <ol className="books-grid">
        { filteredBooks
          ? filteredBooks.map((book, index) => (
            <Book 
              key={index}
              book={book} 
              updateBookShelf={updateBookShelf}
            /> 
          ))
          :
            <Message />
          }
        </ol>
      </div>
    </div>
  )
};

export default BookGrid;