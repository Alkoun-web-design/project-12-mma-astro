// src/lib/db.js
import mysql from 'mysql2/promise';

let pool;
// const hostENV = import.meta.env.DB_HOST;
// const userENV = import.meta.env.DB_USERNAME;
// const pswrdENV = import.meta.env.DB_PASSWORD;
// const dbNameENV = import.meta.env.DB_NAME;

// export async function initializePool() {
//   if (!pool) {
//     pool = mysql.createPool({
//         host: hostENV,
//         user: userENV,
//         password: pswrdENV,
//         database: dbNameENV,
//         waitForConnections: true,
//         connectionLimit: 10,
//         queueLimit: 0
//     });
//   }
// }

export async function initializePool() {
    if (!pool) {
      pool = mysql.createPool({
          host: 'localhost',
          user: 'root',
          password: 'IWSYATTHS1988',
          database: 'mma',
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0
      });
    }
  }

export async function query(sql, params) {
  await initializePool();
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}

export async function testConnection() {
  try {
    await initializePool();
    const connection = await pool.getConnection();
    console.log('Successfully connected to the database.');
    connection.release();
    return { success: true, message: 'Connected to the database successfully.' };
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    return { success: false, message: error.message };
  }
}