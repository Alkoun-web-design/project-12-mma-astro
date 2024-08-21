export default function FeatureItem(props){
    return(
        <div class="mx-2 flex gap-4 md:gap-6">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                {props.icon}
            </div>
            <div>
                <h3 class="mb-1 text-lg font-semibold md:text-xl">{props.title}</h3>
                <p class="text-gray-500">{props.para}</p>
                {/* <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a> */}
            </div>
        </div>
    )
}