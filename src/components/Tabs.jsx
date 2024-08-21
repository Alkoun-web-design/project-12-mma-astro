export default function Tabs(props) {
    return (
        <div role="tablist" class="tabs tabs-lifted">
            <a role="tab" class="tab">Subject Tutors</a>
            {/* <a role="tab" class="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Tab 2</a> */}
            <a role="tab" class="tab tab-active bg-blue-400 text-primary">HomeSchooling</a>
            <a role="tab" class="tab">Counseling</a>
        </div>
    )
}