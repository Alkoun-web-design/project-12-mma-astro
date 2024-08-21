export default function ServiceCard(props) {
    return (
        <div class="w-80 p-8 m-4 bg-[#FFC610] rounded-md">
            <h3 class="text-xl my-2">{props.title}</h3>
            <p class="text my-2">{props.description}</p>
            <div class="my-2">
                <a href={props.href} class="bg-[#19A28D] py-4 px-20 rounded-md text-white text-center">Read More</a>
            </div>
        </div>
    )
}