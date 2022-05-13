import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getRestaurantById, updateRestaurant } from './services/fetch-utils';

export default function UpdatePage() {
  const { push } = useHistory();
  const { id } = useParams();
  const [restaurantInTheForm, setRestaurantInTheForm] = useState({
    name: '',
    food_type: '',
    style: '',
    rating: 0,
    price: '$$'
  });

  useEffect(() => {
    async function load() {
      const restaurant = await getRestaurantById(id);

      setRestaurantInTheForm(restaurant);
    }
    load();
  }, [id]);

  async function handleUpdateSubmit(e) {
    e.preventDefault();

    await updateRestaurant(id, restaurantInTheForm);

    push('/restaurants');
  }

  return (
    <div className='update'>
      <form onSubmit={handleUpdateSubmit}>
        Update a Restaurant
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