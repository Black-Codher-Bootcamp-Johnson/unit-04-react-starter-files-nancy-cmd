import React from 'react';
import '../css/main.css';


const Book = ({addToBookcase, stored, book, removeFromBookcase}) =>{
  const {
   id,
    volumeInfo:{
      title,
      authors,
      imageLinks: {thumbnail},
      description
    },
    saleInfo:{
      retailPrice
      
    }
  } = book;
  
  return (
    <>
    <div className='book'>
    {/* <h2>{props.book.volumeInfo.title}</h2>
    <h3>{props.book.volumeInfo.authors}</h3>
    <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title}/>
    <p>Price: {props.book.saleInfo.retailPrice ? '£' + props.book.saleInfo.retailPrice.amount : 'no price defined'}</p> */}
    
    
    <img src={thumbnail} alt={title + 'book title'} />
    <div>
    <h2>{title}</h2>
    <p className='author'>by {authors}</p>
    <p className='price'>Price: {retailPrice ? '£' + retailPrice.amount : 'no price defined'}</p>
    <p className='description'>{description?description.substring(0,300)+"...":"No description"}</p>
    </div>

    <div>
    {stored==="library" ? 
    <button className='btn' onClick={() =>addToBookcase(id)}> Add +</button>:
    <button className="remove-button" onClick={() => removeFromBookcase(id)}>x</button>
    }
    </div>
    </div>

    </>
   
    /*if retailPrice exists then show the £+the price, if not then show no price defined */ 
    
  );
  // function addBook(title) {
  //   console.log(`The Book ${title} was clicked`);
   
  // }

}

export default Book;
