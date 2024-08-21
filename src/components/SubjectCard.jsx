// ---
// const props= Astro.props;
// ---

// <!-- <div class="m-4 w-64 flex card shadow-xl bg-gray-100 px-4 py-4">
//     <div class="card-body text-gray-900">
//       <h2 class="card-title mb-4">{props.subject}</h2>
//       <div class="flex flex-row place-content-center">
//         <slot />
//       </div>
      
//       <div class="card-actions justify-end">
//         <button class="btn btn-primary">Learn More</button>
//       </div>
//     </div>
// </div> -->

export default function SubjectCard(props) {

  const handleSubjectCardClick = (props) => {
    // console.log(`${props.subject}`);
    console.log(`${props.subject}`);
  };

  return (
<div onClick={handleSubjectCardClick} class="w-60 h-40 my-12 mx-2 flex flex-col items-center shadow-xl card bg-gray-100 px-4 py-4 md:gap-6 hover:bg-gray-200 cursor-pointer">
  <div class="p-5">
      <h3 class="text-xl font-bold tracking-tight text-gray-900 ">
        {props.subject}
      </h3>
        {props.icon}
  </div>
</div>
  )
}