import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Books extends Component {
  render() {
    return (
      <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
              <div className='book'>
                <div className='book-top'>
                  <div className='book-cover' style={{ width: 124, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`, backgroundRepeat  : 'no-repeat'}}></div>

                      <div className="book-shelf-changer">
                        <select onChange={() => this.props.onChangeShelf(book)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>

                    </div>

                    <div className='book-title'>{book.title}</div>
                    <div className='book-authors'>{book.authors}</div>

                </div>
                </li>
            ))}
      </ol>
    )
  }
}
export default Books