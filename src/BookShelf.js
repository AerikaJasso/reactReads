import React, { Component } from 'react';
import CurrentReads from './CurrentReads';
import FutureReads from './FutureReads';
import Read from './Read';


class BookShelf extends Component {
  state = {
    books: []
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