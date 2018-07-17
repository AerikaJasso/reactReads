import React, {Component} from 'react';

class CurrentReads extends Component {
 
  changeStatus = (event, id) => {
    this.props.onHandleStatusChange(event, id);
  }
  render(){
    const {books} = this.props;
    return(
      <div className="bookshelf">
      {JSON.stringify(books)}
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book) => (
              <li key={book.bookId}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                    <div className="book-shelf-changer">
                      <select onChange={(event) => this.changeStatus(event.target.value, book.bookId)} value={book.status}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">To Kill a Mockingbird</div>
                  <div className="book-authors">Harper Lee</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default CurrentReads;