import Button from './Button.jsx';
import LinkButton from './LinkButton.astro';
// import { createSignal, createResource, For } from 'solid-js';

// import { query } from '../lib/mma-db.js';



export default function TutorSeacrh(){

//   let subjects = [];
//   async function fetch() {
//     try {
//       subjects = await query('SELECT * FROM subjects WHERE subject_id = 1');
      
//     } catch (error) {
//       console.error('Failed to fetch users:', error);
//     }
//   }



// fetch();

// console.log(subjects);

// fetch();
  // async function searchSubject(e) {
  //   console.log(e.target.textContent)
  //   // const selectedSubject = e.target.textContent;
  //   // const subject = db.select().from(Tutors).where(like(Tutors.subjects, selectedSubject));
  //   // console.log(selectedSubject, subject)
  // };

  // const fetchTutors = async (subjects) => {
  //   // const response = await fetch(`/data${subjects ? `?subjects=${subjects}` : ''}`);
  //   const response = await fetch('/data.json');
  //   const data = await response.json();
  //   // console.log(data)
  //   setSubject(data);
    
  // };
  
  // const [subjects, setSubject] = createSignal(null);
  // const [tutors] = createResource(subjects, fetchTutors);

  
  
  return (
    <>
    <div>
      {/* <Button onClick={searchSubject}>Maths</Button>
      <Button onClick={searchSubject}>English</Button> */}
      <Button>Maths</Button>
      <Button>English</Button>
    </div>
    <div>
        {/* <button class='bg-[#02C37E] text-white py-1 px-4 m-2 rounded-full' onClick={() => setSubject('Science')}>Science</button>
        <button class='bg-[#02C37E] text-white py-1 px-4 m-2 rounded-full' onClick={() => setSubject('English')}>English</button>
        <button class='bg-[#02C37E] text-white py-1 px-4 m-2 rounded-full' onClick={() => setSubject('Maths')}>Maths</button> */}
        <div>
            {/* {tutors.loading && <p>Loading...</p>}
            {tutors.error && <p>Error: {tutors.error.message}</p>} */}
            {/* <For each={tutors}>
              {(tutor) => (
                <div>
                  {tutor.firstname}
                </div>
              )}
            </For> */}
            {/* <h1>Subjects</h1>
              <ul>
                {subjects.map((subject) => (
                  <li>{subject.subject_id}</li>
                ))}
              </ul> */}
        </div>
    </div>
    </>
  );
}