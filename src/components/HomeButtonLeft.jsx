export default function HomeButtonLeft(props) {
    return (
        <>
            <a role="button" href={props.href} class="m-2 px-4 py-2 bg-white rounded-full w-80 text-wrap">
                <div class="">{props.name}</div>
                <div class="ml-auto rounded-full bg-[#FFA044] w-4 h-4"></div>
            </a>
        </>
    )
}