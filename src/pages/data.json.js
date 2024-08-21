import { db, Tutors, like, eq, gt, count, sql } from 'astro:db';

export async function GET({ request }) {
  const url = new URL(request.url);
  // const subjects = url.searchParams.get('subjects');

  // This line produces the result of the bottom query
  // let query = db.select( {schedule: Tutors.schedule} ).from(Tutors);
  let tutorsdb = db.select().from(Tutors);
  let query = tutorsdb.where(eq(Tutors.charges, 3000));
  // if (subjects) {This line is the criteria someone will search for
    // query = query.where(eq(Tutors.firstname, "Hassam"));
  // }

  const results = await query;

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}