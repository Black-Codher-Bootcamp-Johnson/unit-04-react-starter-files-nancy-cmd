import React from 'react';
import {Link} from 'react-router-dom';




const Header = (props) => {
    const titleStyle = { 
        fontWeight: "bold",
        fontSize: "40px",
        textAlign: "center",
        fontFamily : "cursive",
        color : "#113e21"
    }
    const spanStyle = {
        color: "black",
        // fontFamily : "'Roboto', sans-serif",
    }
    return (
        <> {/*short hand of react.fragment*/ }
        <header>
            <h1 style={titleStyle}>Page <span style={spanStyle}>Turners</span></h1>
            <nav className='header-nav'>
            <Link to="/" className='link'> Home </Link> 
            <Link to="/about" className='link'>About</Link> 
            <Link to="/bookcase" className='link'> Bookcase ({props.bookLength})</Link>
            </nav>
        </header>
        
        </>
    );
}

export default Header;