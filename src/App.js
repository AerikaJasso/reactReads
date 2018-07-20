import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [{
      bookId: 1,
      status:'read'
    },
    {
      bookId: 2,
      status:'currentlyReading'
    },
    {
      bookId: 3,
      status:'wantToRead'
    },
    
  ]
   }
  //  componentDidMount() {
  //    BooksAPI.getAll()
  //    .then((books) => {
  //     this.setState(() => ({
  //       books
  //     }))
  //    })
  //  }
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
  render() {
    return (
      <div className="app">
        <Route exact={true} path="/" render={ () => (
          <BookShelf
            books={this.state.books}
            onHandleStatusChange={this.handleStatusChange}
           />
        )}/>

        <Route
          exact={true} 
          path='/search'
          render={() => (
           <SearchBooks
            books={this.state.books}
            handleStatusChange={this.handleStatusChange}
           />
          )}
        /> 
      </div>
    )
  }
}

export default BooksApp
