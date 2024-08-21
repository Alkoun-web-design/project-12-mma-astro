// Get the client
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'IWSYATTHS1988',
  database: 'mma',
  waitForConnections: true,
});

export async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}