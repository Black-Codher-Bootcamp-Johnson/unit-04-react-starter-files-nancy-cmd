import ReactPaginate from 'react-paginate';
import React, {useEffect, useState } from "react";
import bookList from '../models/books.json';

const PaginationComponent = (props) => {
    const { Book, book }= props;
    const [currentPage, setCurrentPage] = useState(0);
    
    const [books, setBooks] = useState([]);

    
    async function findBooks(keyword) {
        const url =`https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite&startindex=0&maxResul
        ts=15&orderBy=newest`;
        const results = await fetch(url).then(res => res.json());
        
        if (!results.error) {
          setBooks(results.items);
          }
        }
    useEffect(() => {
        findBooks();
      }, []);

     
      function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }
      const PER_PAGE = 10;

const offset = currentPage * PER_PAGE;

const currentPageData = books
    .slice(offset, offset + PER_PAGE)
    .map((book) => (<Book  key={book.id} book={book}  {...props}/>));

const pageCount = Math.ceil(books.length / PER_PAGE);

return <>
     <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      {currentPageData}
</>
}

export default PaginationComponent;