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
    <div className='create'>
      <form onSubmit={handleCreateSubmit}>
        Create a Restaurant
        <label>
          Name
          <input value={restaurantInTheForm.name} onChange={e => setRestaurantInTheForm({
            ...restaurantInTheForm,
            name: e.target.value,
          })} />
        </label>    
        <label>
          Type of Food
          <input value={restaurantInTheForm.food_type} onChange={e => setRestaurantInTheForm({
            ...restaurantInTheForm,
            food_type: e.target.value,
          })} />
        </label>
        <label>
          Style
          <input value={restaurantInTheForm.style} onChange={e => setRestaurantInTheForm({
            ...restaurantInTheForm,
            style: e.target.value,
          })} />
        </label>
        <label>
          Rating
          <input value={restaurantInTheForm.rating} type="number" onChange={e => setRestaurantInTheForm({
            ...restaurantInTheForm,
            rating: e.target.value,
          })} />
        </label>
        <label>
          Price
          <input value={restaurantInTheForm.price} onChange={e => setRestaurantInTheForm({
            ...restaurantInTheForm,
            price: e.target.value,
          })} />
        </label>    
        <button>Submit</button>
      </form>
    </div>
  );
}
