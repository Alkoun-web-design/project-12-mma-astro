// src/pages/api/test-db-connection.js
import { testConnection } from '../../lib/db';

export async function get({ params, request }) {
  const result = await testConnection();
  
  return new Response(JSON.stringify(result), {
    status: result.success ? 200 : 500,
    headers: {
      "Content-Type": "application/json"
    }
  });
}