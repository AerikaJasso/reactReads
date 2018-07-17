import React, { Component } from 'react';
import CurrentReads from './CurrentReads';
import FutureReads from './FutureReads';
import Read from './Read';


class BookShelf extends Component {
  state = {
   books: [{
    bookId: 1,
    status: 'currentlyReading'
   },
   {
    bookId: 2,
    status: 'read'
   },
   {
    bookId: 3,
    status: 'wantToRead'
   }
  ]
  }

  handleStatusChange = (event, id) => {
    const updatedBooksArray = this.state.books.map((book) => {
      if (book.bookId === id){
        book.status = event;
      }
      return book;
    });
    this.setState(() => {
      return {
        books: updatedBooksArray
      }
    });
  }
  render(){
    return(
      <div>
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentReads
                  onHandleStatusChange={this.handleStatusChange}
                  books={this.state.books.filter((currentBook) => (
                    currentBook.status === 'currentlyReading'))
                  }
                />
                <FutureReads 

                />
                <Read

                />
      
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>

      </div>
    );
  }

}

export default BookShelf