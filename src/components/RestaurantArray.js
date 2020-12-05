import { findByLabelText } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Restaurant from './Restaurant.js';

export default function RestaurantArray ( {restaurants} ) {

    const style = {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        margin: "3rem"
    }

    return(
        <div className = "RestaurantArray" style = {style}>
            {
                restaurants.map(restaurant => {
                    return <Restaurant restaurant = {restaurant}
                                       key = {restaurant.id} />;
                })
            }
        </div>
    );
}
