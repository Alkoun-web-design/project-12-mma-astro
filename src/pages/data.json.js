export async function GET({ request }) {
 
const data = [
  {
    firstName:"Hisham",
    lastName:"Rashdi",
    age:"35",
    avatar:"/avatars/man-1.webp",
    subjects:["Maths","Physics"], 
  },{
    firstName:"Hasaan",
    lastName:"Rashdi",
    age:"21",
    avatar:"/avatars/man-2.webp",
    subjects:["English","Chemistry"]
  },{
    firstName:"Hassam",
    lastName:"Sajid",
    age:"36",
    avatar:"/avatars/man-3.webp",
    subjects:["Web Development"]
  },{
    firstName:"John",
    lastName:"Cena",
    age:"48",
    avatar:"/avatars/john-cena.webp",
    subjects:["Thugonomics", "Physical Education"]
  },{
    firstName:"Keith",
    lastName:"Jardine",
    age:"46",
    avatar:"/avatars/keith-jardine.webp",
    subjects:["English"]
  },{
    firstName:"Rich",
    lastName:"Franklin",
    age:"48",
    avatar:"/avatars/rich-franklin.webp",
    subjects:["Maths", "Physics"]
  },{
    firstName:"Myles",
    lastName:"Kennedy",
    age:"48",
    avatar:"/avatars/myles-kennedy.webp",
    subjects:["Music", "Vocals"]
  }
];
  // const results = await query;

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }

  });
}