import React from 'react';
import '../BookCounter.css';

const BookCounter = (props) => {

  return (
    <main>
      <h2>{props.library.name}'s Books</h2>
      {props.library.books.map((book) => (
      <li >
        <h3 className='booklist'>{book.volumeInfo.title}</h3>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}/>
        <p className='description'>Description: {book.volumeInfo.description}</p> 
        <ul>
        {book.volumeInfo.authors.map((author) => {
          <li>{author}</li>
        })}
        </ul>
        <p className='price'>Price: £{book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount}</p>
        <hr></hr>
        </li>))}
   <button  onClick={() =>
    props.refreshBooks()}>Refresh
    Books</button>
    </main>
  );
}

export default BookCounter;
