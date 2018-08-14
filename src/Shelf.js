import React from 'react';
import Book from './Book';

const Shelf = (props) => {
  const { books, updateBookShelf, header } = props;
  console.log("The props in shelf: ", props);
  console.log("The books  props in shelf: ", books);
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