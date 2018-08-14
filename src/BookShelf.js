import React from 'react';
import { Link } from 'react-router-dom';
import Shelf  from './Shelf';

const BookShelf = (props) => {

  const { books, updateBookShelf} = props
  return(
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              updateBookShelf={updateBookShelf}
              books={books.filter((currentBook) => (
                currentBook.shelf === 'currentlyReading'))
              }
              header='Currently Reading'
            />
            <Shelf
              updateBookShelf={updateBookShelf}
              books={books.filter((currentBook) => (
                currentBook.shelf === 'wantToRead'))
              }
              header='Want to Read'
            />
            <Shelf
              updateBookShelf={updateBookShelf}
              books={books.filter((currentBook) => (
                currentBook.shelf === 'read'))
              }
              header='Read'
            />
          </div>
        </div>
        <div className="open-search">
          <Link to={{
            pathname: '/search',
            className: 'add-book',
            state: { fromDashboard: true }
          }}
          >Add a Book
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookShelf