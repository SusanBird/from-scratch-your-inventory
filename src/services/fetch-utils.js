import React from 'react';
import { client } from './client';

export async function logout() {
  await client.auth.signOut();
}

export async function signUp(email, password) {
  const { user, error } = await client.auth.signUp({
    email,
    password,
  });

  if (error) return error;

  return user;
}

export async function signIn(email, password) {
  const { user, error } = await client.auth.signIn({
    email, 
    password,
  });

  if (error) return error;

  return user;
}

export function getUser() {
  return client.auth.session();
}

export async function createRestaurant(restaurant) {
  const { body, error } = await client
    .from('Restaurants')
    .insert(restaurant);

  return error || body;
}

export async function getRestaurants() {
  const { body, error } = await client
    .from('Restaurants')
    .select('*');

  return error || body;
}

export async function getRestaurantById(id) {
  const { body, error } = await client
    .from('Restaurants')
    .select('*')
    .match({ id })
    .single();
  
  return error || body;
}

export async function updateRestaurant(id, newRestaurant) {
  const { body, error } = await client
    .from('Restaurants')
    .update(newRestaurant)
    .match({ id });

  return error || body;
}