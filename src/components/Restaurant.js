import React, {useState, useEffect} from 'react';
import './Restaurant.css';

function Restaurant(props){
    const [restaurant, setRestaurant] = useState(0);

    useEffect(() => {
        setRestaurant(props.restaurant);
    }, [props.restaurant])


    function formatTransactions(transactions){
        var i;
        var str_tran = '';
        for (i in transactions){
            if (transactions[i] === "restaurant_reservation"){
                str_tran += " Dine-in";
            }
            else if (transactions[i] === "delivery"){
                str_tran += " Delivery";
            }
            else if (transactions[i] === "pickup"){
                str_tran += " Pickup";
            }
            if (i !== transactions.length - 1){
                str_tran += ",";
            }
        }
        return str_tran;
    }

    return (
        <div className = "Restaurant">
            <div className = "image-container">
                <img src = {restaurant.imageSrc} alt = ''/>;
            </div>
            <h2>{restaurant.name}</h2>
            <div className = "restaurant-info">
                <div className = "restaurant-address">
                    <p>{restaurant.address}</p> 
                    <p>{restaurant.city}</p>
                    <p>{restaurant.state}, {restaurant.zipCode}</p>
                </div>
                <div className = "restaurant-info2">
                    <p>{restaurant.rating} ☆</p>
                    <p>{restaurant.reviews} reviews</p>
                    <p><strong>{formatTransactions(restaurant.transactions)}</strong></p>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;