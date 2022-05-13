import React, { useState, useEffect } from 'react';
import { getRestaurants } from './services/fetch-utils';
import { Link } from 'react-router-dom';

export default function ListPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await getRestaurants();

      setRestaurants(data);
    }

    loadData();
  }, []);

  return (
    <div>
      {
        restaurants.map((restaurant, i) => <Link key={restaurant.name + i} to={`/restaurants/${restaurant.id}`}>
          <div className='restaurant-item'>
            <p>{restaurant.name}</p>
            <p>Type of Food: {restaurant.food_type}</p>
            <p>Style: {restaurant.style}</p>
            <p>Rating: {restaurant.rating}</p>
            <p>Price: {restaurant.price}</p>
          </div>
        </Link>)
      }
    </div>
  );
}
