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