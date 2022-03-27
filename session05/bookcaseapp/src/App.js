import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUsPage from './pages/About';
import SearchBar from './components/Search';
import { Link } from 'react-router-dom';
import '../src/css/App.css';
//import {BookcasePage} from './components/BookcasePage';
// import Book from './components/Book';
import bookList from './models/books.json';
//import PropTypes from 'prop-types';
import BookList from './components/BookList';
import PaginationComponent from './components/Pagination';
import "./images/background.jpeg";

function App() {
  const [books, setBooks] = useState(bookList);
  const [keyword, setKeyword] = useState('');
  const [bookcase, setBookcase] = useState([]);


  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter(book => book.id === id)));
    setBooks([books.map(book => {
      if (book.id === id) {
        book.read = true;
      }
      return book;
    }
    )]);
  }

  const removeFromBookcase = (id) => {
    setBookcase(bookcase.filter(book => book.id !== id));
    setBooks([books.map(book => {
      if (book.id === id) {
        book.read = false;
      }
      return book;
    }
    )]);
  }



  async function findBooks(keyword) {
    const url =`https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite&startindex=0&maxResul
    ts=15&orderBy=newest`;
    const results = await fetch(url).then(res => res.json());
    
    if (!results.error) {
      // setBooks(results.items);
      setBooks(results.items.filter(result => bookcase.findIndex(book => result.id === book.id)===-1));
      }
    }
    
  return(
    <>
    <Router>
      <Header></Header>
      <SearchBar keyword={keyword} setKeyword={setKeyword} findBooks={findBooks} setBooks={setBooks}></SearchBar>
      <Routes>
        <Route exact path="/" element={<BookList books={books} stored="library" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />}></Route>

         <Route path="/bookcase" element={ <BookList books={bookcase} stored="bookcase" addToBookcase={addToBookcase} removeFromBookcase={removeFromBookcase} />}></Route>   
       

       <Route path="/about" element={<AboutUsPage></AboutUsPage>}></Route>
       
      </Routes>
      
        {/* <PaginationComponent keyword={keyword} setKeyword={setKeyword} findBooks={findBooks} setBooks={setBooks}></PaginationComponent>    */}
    </Router>

    
    
    </>
  )
  //return books.map(bookItem => <Book book={bookItem}/>);
  //return <BookList books={books} addBook={addBook}></BookList>
  //adding the properties and the values 
}

// function addBook(title) {
//   console.log(`The Book ${title} was clicked`);
 
// }



// Book.propTypes = {
//   volumeInfo: PropTypes.shape({title: PropTypes.string.isRequired}),
//   authors: PropTypes.array.isRequired,
//   price: PropTypes.number.isRequired,
//   description: PropTypes.string,
//  thumbnailImage: PropTypes.string.isRequired
//  };
//  Book.defaultProps = {
//   price: 'No price provided'
//  };
export default App;

