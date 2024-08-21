export default function StaffAvatar(props){
    return (
      <div className="avatar border-4 border-white rounded-full">
        <div className="w-20 rounded-full">
          <img src={props.src} />        
        </div>
      </div>
    )
}