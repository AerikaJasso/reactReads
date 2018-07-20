import React, { Component } from 'react';
import CurrentReads from './CurrentReads';
import { Link } from 'react-router-dom';
import FutureReads from './FutureReads';
import PropTypes from 'prop-types'
import Read from './Read';


class BookShelf extends Component {
 static propTypes = {
    books: PropTypes.array.isRequired,
    onHandleStatusChange: PropTypes.func.isRequired,
  }
  render(){
    const { books, onHandleStatusChange } = this.props
    return(
      <div>
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentReads
                  onHandleStatusChange={onHandleStatusChange}
                  books={books.filter((currentBook) => (
                    currentBook.status === 'currentlyReading'))
                  }
                />
                <FutureReads
                  onHandleStatusChange={onHandleStatusChange}
                  books={books.filter((currentBook) => (
                    currentBook.status === 'wantToRead'))
                  }
                />
                <Read
                  onHandleStatusChange={onHandleStatusChange}
                  books={books.filter((currentBook) => (
                    currentBook.status === 'read'))
                  }
                />
      
              </div>
            </div>
            <div className="open-search">
            <Link to={{
              pathname: '/search',
              className: 'add-book'
            }}
            >Add a Book</Link>
            </div>
          </div>

      </div>
    );
  }

}

export default BookShelf