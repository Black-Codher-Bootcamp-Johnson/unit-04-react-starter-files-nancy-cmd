import React from "react";
import Book from "./Book";

const  BookList=(props)=>{
    const{books, addToBookcase, removeFromBookcase}= props; //extracting the addbook function from props

    return (
        <div className="list">
        <div>
        {(props.stored==="library") && <h2>Suggested Reading</h2>}
        {        
         (books.length===0) ? 
           (<div className="no-books">No books added yet...</div>) :
            (books
              .filter(book => (props.stored==="bookcase"||!book.read) )
              .map((book) => (<Book  key={book.id} book={book}  {...props}/>)
             //   .map((book) => (<Book onClick={() => addBook(book.volumeInfo.title)} key={book.id} book={book} {...props}/>)
             //stored="library"
           )
        )
        }


    {/* {books.map(book => <Book onClick={() => addBook(book.volumeInfo.title)} key={book.id} book={book}/>) } */}
    </div>
    </div>
        )
}
export default BookList;