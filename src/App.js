import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    books: [],
    results: []
   }
   componentDidMount() {
    this.getBooks();
   }

   getBooks = () => {
    BooksAPI.getAll()
     .then((books) => {
      this.setState(() => ({
        books
      }))
     })
     .catch((err) => {
       console.log('Error during fetch GET request', err);
     })
   }

   searchBooks =(query) => {
    BooksAPI.search(query)
    .then((results) => {
      this.setState(() => console.log('results: ', results) || ({
        results
      }))
    })
    .catch((err) => {
      console.log('Error during POST request', err);
    })
   }
  
   handleStatusChange = (event, id) => {
    const updatedBooksArray = this.state.books.map((book) => {
      if (book.id === id){
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
    console.log('This component did mount fired: ', this.state.books);
    console.log('This component search books: ', this.state.results);
    const {books, results}= this.state
    return (
     
      <div className="app">
      {/* <div> 
        <h1>Testing</h1>
        <ol>
        
      { books.map((book) => (
        <li 
        key={book.id}
        >
          {book.title}
          {book.subtitle}
          {book.authors}
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
        </li>
      ))}
      </ol>
        
      </div> */}
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
            results={this.state.results}
            handleStatusChange={this.handleStatusChange}
            searchBooks={this.searchBooks}
           />
          )}
        /> 
      </div>
    )
  }
}

export default BooksApp
