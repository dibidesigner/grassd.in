import React from "react";

function Search(){
    return(
       <>
        <div className="search">
            <input type="text" placeholder="Enter your location" className="input" />
            <input type="text" placeholder="Enter your date" className="input" />
            <input type="submit" value="Search" className="button" />
        </div>
       </>
    );
}

export default Search;