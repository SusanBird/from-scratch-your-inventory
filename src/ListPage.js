import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import { getRestaurants } from './services/fetch-utils';

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
    <div>ListPage</div>
  );
}
