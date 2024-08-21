import { SolarArrowRight } from "./Icons"
import H2 from "./H2"

export default function LinkedComponentCard (props) {
    return (
        <a href={props.link} class="decoration-transparent">
            <div class="backdrop-blur-sm bg-white/50 rounded-xl shadow-md w-[398px] h-56 m-3 p-3 hover:shadow-lg hover:bg-white/60 transition ease-in-out">
                <H2 heading={props.heading}/>
                {props.children}
                <div class="flex justify-end content-end">
                    <SolarArrowRight width="2em" height="2em"/>
                </div>
            
            </div>
        </a>
    )
}