import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createRestaurant } from './services/fetch-utils';

export default function CreatePage() {
  const history = useHistory();
  const [restaurantInTheForm, setRestaurantInTheForm] = useState({
    name: '',
    food_type: '',
    style: '',
    rating: 0,
    price: '$$'
  });

  async function handleCreateSubmit(e) {
    e.preventDefault();

    await createRestaurant(restaurantInTheForm);

    history.push('/restaurants');
  }

  return (
    <div>CreatePage</div>
  );
}
