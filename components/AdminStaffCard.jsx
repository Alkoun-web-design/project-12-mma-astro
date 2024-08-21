import StaffAvatar from "./StaffAvatar"

export default function AdminStaffCard(props) {
    return (
        <div class="m-8 w-80 h-72 px-4 rounded-3xl bg-[#EFEEE5]">
            <div class="flex flex-col">
                <div class="ml-6 mt-4">
                    <StaffAvatar src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>
                </div>
                <div class="ml-4 mr-2 mt-2 px-4 border-l-4 border-black">
                    <h3 class="text-lg">Anna Stana</h3>
                    <p>Admin</p>        
                </div>
                <div class="mx-4 my-2 px-4">
                    <p>A short description about myself that will interest those visiting the page.</p>
                    <div class="card-actions justify-end">
                    </div>        
                </div>
            </div>
        </div>
    )
}