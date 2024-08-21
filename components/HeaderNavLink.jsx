export default function HeaderNavLink(props) {
     
    return (
        <li>
            <a onClick={handleNavClick} 
                class="w-40 border-[#DEF1EB] border-4 px-1 py-2 my-1 rounded-full text-sm font-semibold text-gray-600 transition duration-100 hover:text-white hover:bg-[#86C2F8]"
                href={props.href}
                data-active=''>
                {props.name}
            </a>
        </li>
    )
}