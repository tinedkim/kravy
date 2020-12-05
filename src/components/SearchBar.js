import React, {useState, useEffect} from 'react';
import './SearchBar.css'

function SearchBar(props) {
    
    const [location, setLocation] = useState('');
    const [error, setError] = useState(' Search...');

    function handleSearch(event){
        event.preventDefault();
        if (location !== ''){
            props.searchYelp(location);
        }
        else{
            setError(" You have to enter something!");
        }
    }
    
    return(
        <div className = "search">
            <div className = "searchbar">
                <input placeholder = {error} onChange = {event => setLocation(event.target.value)}/>
            </div>
            <div className = "searchbutton">
                <a onClick = {handleSearch}>Search</a>
            </div>
        </div>
        
    )


}

export default SearchBar;