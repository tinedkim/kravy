import React, {useState, useEffect} from 'react';
import './App.css';
import RestaurantArray from './components/RestaurantArray.js';
import Restaurant from './components/Restaurant.js';
import SearchBar from './components/SearchBar.js';
import Yelp from './util/Yelp';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  function searchYelp(location){
    Yelp.search(location).then(restaurants => {
      console.log(restaurants);
      setRestaurants(restaurants);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>kravy</h1>
        <p>Search a location to see if nearby restaurants have pickup or delivery services!</p>
        <SearchBar searchYelp = {searchYelp}/>
      </header>
      <body>
        <RestaurantArray restaurants = {restaurants}/>
      </body>
    </div>
  );
}

export default App;
