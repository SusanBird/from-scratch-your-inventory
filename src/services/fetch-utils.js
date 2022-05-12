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

