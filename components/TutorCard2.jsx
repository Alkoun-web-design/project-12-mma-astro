import StaffAvatar from "./StaffAvatar"

export default function TutorCard2() {
    return (
        <div className="card w-96 bg-base-100">
            <div className="card-body">
                <div class="flex flex-row">
                    <div class="flex-col">
                        <StaffAvatar/>
                    </div>
                    <div class="flex-col">
                        <h3 className="card-title">Anna Stana</h3>        
                    </div>
                    <div class="flex-col">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Schedule</button>
                        </div>        
                    </div>
                </div>
                
            </div>
        </div>
    )
}