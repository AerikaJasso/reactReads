import React from 'react';
import Book from './Book';

const Shelf = (props) => {
  const { books, updateBookShelf, header } = props;
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books.map((book, index) => (
            <Book
              key={index}
              book={book}
              updateBookShelf={updateBookShelf}
            />
          ))}
        </ol>
      </div>
    </div>
  ) 
}

export default Shelf;