import React from 'react';
import Message from './Message';

const Book = (props) => {
  const { updateBookShelf, book} = props;
  console.log("BooK in book: ", book);
  const changeShelf = (book, shelf) => {
    updateBookShelf(book, shelf);
  };
  
  return(
     <li>
      <div className="book">
        <div className="book-top">
          { book.imageLinks && book.imageLinks.smallThumbnail ? (
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            ) : (
              <Message />
            )
          }
          <div className="book-shelf-changer">
            
            <select 
              onChange={(event) => 
              changeShelf(book, event.target.value)
              }
              value={book.shelf}
            >
              <option value="move" disabled> Move to... </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
            
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li> 
  );
}
  

export default Book;