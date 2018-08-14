import React, { Component } from 'react';
import SearchBar from './SearchBar';
import BookGrid from './BookGrid';
import escapeStringRegexp from 'escape-string-regexp';

// What state does my app need/have?
// When does it change?
class SearchBooks extends Component {
 
    state = {
      query:''
    }
  
  searchQuery = (query) => {
    if (query){
      query = escapeStringRegexp(query);
      this.setState({ query: query}, () => {
        this.props.queryBooks(query);
      }); 
    }
    else{
      this.setState({ query: query });
    }
  } 
  

  render(){
    const { query } = this.state;
    const { searchedBooks, handleStatusChange, updateBookShelf, getBooks } = this.props;
    return(
      <div>
      
        <SearchBar
          searchQuery={this.searchQuery}
          query={query}
          getBooks={getBooks}
        />
        { query.length > 0 &&
          <BookGrid
            query={query}
            searchedBooks={searchedBooks}
            handleStatusChange={handleStatusChange}
            updateBookShelf={updateBookShelf}
          />
        }    
      </div>
    )
  }
}
export default SearchBooks;