import React, { useEffect, useState } from 'react';
import Restaurant from './Restaurant.js';

export default function RestaurantArray ( {restaurants} ) {

    return(
        <div className = "RestaurantArray">
            {
                restaurants.map(restaurant => {
                    return <Restaurant restaurant = {restaurant}
                                       key = {restaurant.id} />;
                })
            }
        </div>
    );
}
