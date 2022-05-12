import React from 'react';
import { client } from './client';

export async function logout() {
  await client.auth.signOut();
}
