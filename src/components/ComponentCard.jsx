import H2 from "./H2"

export default function ComponentCard (props) {
    return (
        <div class="backdrop-blur-sm bg-white/50 rounded-xl shadow-md w-auto h-56 m-3 p-3 hover:shadow-lg hover:bg-white/60 transition ease-in-out">
            <H2 heading={props.heading}/>
                {props.children}
        </div>
    )
}