import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  // static propTypes = {
  //   book: PropTypes.object.isRequired
  // }
  changeStatus = (event, id) => {
    console.log("Event, and Id in the book Change Status", event, id);
    this.props.handleStatusChange(event, id);
  }
  render(){
    console.log("These are the props in BOOK.js", this.props);
    const book = this.props;
    return(
      <li key={book.bookId}>
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
          <div className="book-shelf-changer">
            <form onChange={(event) => 
                this.changeStatus(event.target.value,book.bookId)
              }
              value={book.status}>
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </form>
          </div>
          </div>
          <div className="book-title">1776</div>
          <div className="book-authors">David McCullough</div>
        </div>
      </li>
    );
  }
}

export default Book;