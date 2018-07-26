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
    const result = this.props;
    return(
      <li key={result.id}>
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${result.imageLinks.smallThumbnail})` }}></div>
          <div className="book-shelf-changer">
            <form onChange={(event) => 
                this.changeStatus(event.target.value,result.id)
              }
              value={result.status}>
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
          <div className="book-title">{result.title}</div>
          <div className="book-authors">{result.authors}</div>
        </div>
      </li>
    );
  }
}

export default Book;