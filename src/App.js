import React from 'react'
import './App.css'
import { Route, withRouter } from 'react-router-dom'
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import createHistory from "history/createBrowserHistory"

class BooksApp extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      books: [],
      searchedBooks: []
    }
  }
  // === Set initial state === //
   componentWillMount() {
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
  
    // === Search Component === //
   queryBooks = (query) => {
    BooksAPI.search(query.trim())
    .then((data) => {
      let books = this.state.books;
      if(data !== undefined && !data.hasOwnProperty('error')){
        data.map((d) => {
          const shelvedBook = books.find((b) => b.id === d.id);
          if(shelvedBook){
            d.shelf = shelvedBook.shelf;
          console.log("shelved Book OBJECT: ", d);
          }
          else{
            d.shelf = 'none';
          }
          console.log("DATA SHELF OBJECT: ", d);
          return d
        })
      }
      this.setState({searchedBooks: data})
      console.log("data array: ", data);
      console.log("searchBooks state: ", this.state.searchedBooks);
   })
  
  }

  // === Update Shelf Status === //
   updateBookShelf = (bookObj, shelf) => {
    // console.log("Book in App.js: ", bookObj);
     
    BooksAPI.update(bookObj, shelf)
    .then(() => {
      let books = this.state.books;
      console.log('The books in update: ', books);
      
      // Handle None
      if( shelf === 'none' ){
        this.setState((prevState) => ({
          books: prevState.books.filter((b) => {
            return b.id !== bookObj.id 
          })
        }))
      }
      // filtering out the bookObj from books arr.
      else if(books.filter((b) => b.id !== bookObj.id).concat([bookObj])){
        console.log("IN THE ELSEIF BOOKOBJ", [bookObj]);
        this.setState((prevState) => ({
          books: prevState.books
        }))
      }
    
    this.getBooks();
    this.props.history.push('/');
  
    })
   }
   
  render() {
    const {books, searchedBooks}= this.state;
    console.log("NEW BOOKS IN APP.JS: ", books);
    return (
     
      <div className="app">
        <Route exact={true} path="/" render={ () => (
          <BookShelf
            books={books}
            updateBookShelf={this.updateBookShelf}
           />
        )}/>

        <Route
          exact={true} 
          path='/search'
          render={() => (
           <SearchBooks
            searchedBooks={searchedBooks}
            queryBooks={this.queryBooks}
            updateBookShelf={this.updateBookShelf}
            getBooks={this.getBooks}
           />
          )}
        /> 
      </div>
    )
  }
}

export default withRouter(BooksApp)
