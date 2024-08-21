import StaffAvatar from "./StaffAvatar"

export default function StaffCard(props) {
    return (
        <div className="m-8 w-80 h-72 px-4 rounded-3xl bg-[#1DCD8D]">
            <div class="flex flex-col">
                <div class="ml-6 mt-4">
                    <StaffAvatar src={props.avatar}/>
                </div>
                <div class="ml-4 mr-2 mt-2 px-4 border-l-4 border-black">
                    <h3 class="text-lg text-white">{props.firstName} {props.lastName}</h3>
                    <p>Subject Speciality:</p>        
                </div>
                <div class="mx-4 my-2 px-4">
                    <div class="card-actions flex-row text-[#1DCD8D] text-sm">
                        {props.children}
                        {/* <div class="bg-white py-1 px-2 rounded-md">
                            Mathematics
                        </div>
                        <div class="bg-white py-1 px-2 rounded-md">
                            Accounting
                        </div>
                        <div class="bg-white py-1 px-2 rounded-md">
                            Computing
                        </div>
                        <div class="bg-white py-1 px-2 rounded-md">
                            Arts
                        </div> */}
                    </div>        
                </div>
            </div>
        </div>
    )
}