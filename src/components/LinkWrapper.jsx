export default function LinkWrapper (props) {
    return (
        <a href="" class="decoration-transparent">
            {props.children}
        </a>
    );
}