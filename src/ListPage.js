import React, { useState, useEffect } from 'react';
import { getRestaurants } from './services/fetch-utils';
import Item from './Item';

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
    <div className='list-page'>
      {restaurants.map((restaurant, i) => 
        <Item key={restaurant + i} restaurant={restaurant} />
      )}
    </div>
  );
}
