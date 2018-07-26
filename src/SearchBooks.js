import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import { BooksList } from './BooksList';


// What state does my app need/have?
// When does it change?

class SearchBooks extends Component {
  // static propTypes = {
  //   books: PropTypes.array.isRequired
  // }
  state={
    query: ''
  }
 
  handleSearchQuery = (query) => {
    this.setState({ query: query});
    if (query && query.length > 1 ){
      this.props.searchBooks(query);
    }
  }  

  render(){
    const { books, handleStatusChange, results } = this.props
    const { query } = this.state
    
    return(
      <div>
        <SearchBar
          handleSearchQuery={this.handleSearchQuery}
          query={query}
        />
        <p>{query}</p>
        <BooksList
          books={books}
          results={results}
          query={query}
          handleStatusChange={handleStatusChange}
        />
       
    </div>
    )
  }
}
export default SearchBooks;