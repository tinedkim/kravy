import React, {useState, useEffect} from 'react';

function Restaurant(props){
    const [restaurant, setRestaurant] = useState(0);

    useEffect(() => {
        setRestaurant(props.restaurant);
    }, [props.restaurant])

    return (
        <div className = "Restaurant">
            <div className = "image-container">
                <img src = {restaurant.imageSrc} alt = ''/>;
            </div>
            <h1>{restaurant.name}</h1>
            <div className = "restaurant-info">
                <div className = "restaurant-address">
                    <p>{restaurant.address}</p>
                    <p>{restaurant.city}</p>
                    <p>{restaurant.state} {restaurant.zipCode}</p>
                </div>
                <div className = "restaurant-info2">
                    <p>{restaurant.category}</p>
                    <p>{restaurant.transactions}</p>
                    <p>{restaurant.rating}</p>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;