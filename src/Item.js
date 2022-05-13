import React from 'react';
import { Link } from 'react-router-dom';

export default function Item({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`}>
      <div className='item'>
        <p>{restaurant.name}</p>
        <p>Type of Food: {restaurant.food_type}</p>
        <p>Style: {restaurant.style}</p>
        <p>Rating: {restaurant.rating}</p>
        <p>Price: {restaurant.price}</p>
      </div>
    </Link>
  );
}



