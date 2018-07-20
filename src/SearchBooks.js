import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import { BooksList } from './BooksList';

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state={
    query: ''
  }

  handleSearchQuery = (query) => {
    // query= query.trim();
    this.setState({ query: query});
  }  

  render(){
    console.log("this is the books array in the Search Books:", this.props.books);
    const { books, handleStatusChange } = this.props
    const { query } = this.state
    
    return(
      <div>
        <SearchBar
          handleSearchQuery={this.handleSearchQuery}
          query={query}
        />

        <BooksList
          books={books}
          query={query}
          handleStatusChange={handleStatusChange}
        />
       
    </div>
    )
  }
}
export default SearchBooks;