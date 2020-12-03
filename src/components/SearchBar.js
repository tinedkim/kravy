import React, {useState, useEffect} from 'react';

function SearchBar(props) {
    
    const [location, setLocation] = useState('');

    function handleSearch(event){
        props.searchYelp(location);
        event.preventDefault();
    }
    
    return(
        <div className = "search">
            <div className = "searchbar">
                <input placeholder = "Restaurants that can deliver to you!" onChange = {event => setLocation(event.target.value)}/>
            </div>
            <div className = "searchbutton">
                <a onClick = {handleSearch}>Search</a>
            </div>
        </div>
        
    )


}

export default SearchBar;