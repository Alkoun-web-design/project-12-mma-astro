// import { connectToDatabase } from './db.js';

// export async function getTutorFirstNames() {
//   const connection = await connectToDatabase();
//   try {
//     const [rows] = await connection.execute('SELECT firstName FROM Tutors');
//     return rows.map(row => row.firstName);
//   } finally {
//     await connection.end();
//   }
// }