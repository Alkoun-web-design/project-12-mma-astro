// src/pages/api/users.js
import { query } from '../lib/db';

export async function get({ params, request }) {
  try {
    const subjects = await query('SELECT * FROM subjects');
    return new Response(JSON.stringify(subjects), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    console.error('Database query error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}