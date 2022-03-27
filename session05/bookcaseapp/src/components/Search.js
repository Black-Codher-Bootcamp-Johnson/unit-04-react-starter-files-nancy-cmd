import React from "react";

const SearchBar = (props) => {
    const {keyword, setKeyword, findBooks }= props;
    const handleSubmit = (event) =>{
        event.preventDefault();
        findBooks(keyword);
        };
    return <div className="searchBar">
         <form onSubmit={(e) => handleSubmit(e)}>
             <label>
             <input type="text" placeholder="Enter name, author, genre..." name="search" value={keyword} onChange={(e) => setKeyword(e.target.value)}/>
             </label>
                <button type="submit" value="submit">Search</button>
            </form>
    </div>
           
        
        
}



export default SearchBar;