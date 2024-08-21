export default function Button(props) {
    return (
        <button onClick={props.onClick} class="bg-[#02C37E] text-white py-1 px-4 m-2 rounded-full">{props.children}</button>
    )
}