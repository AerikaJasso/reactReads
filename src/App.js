import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf';
import SearchBooks from './SearchBooks';

class BooksApp extends React.Component {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <BookShelf />
        )}/>

        <Route
          exact={true} 
          path='/search'
          component={SearchBooks}
        /> 
      </div>
    )
  }
}

export default BooksApp
