export default function HomeButtonRightt(props) {
    return (
        <>
            <a role="button" href={props.href} class="m-2 px-4 py-2 bg-white text-right rounded-full w-80">{props.name}</a>
        </>
    )
}