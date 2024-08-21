export default function DropdownNavLink(props) {
    return (
      <li>
        <details>
          <summary class="w-40 border-[#DEF1EB] border-4 rounded-full px-2 my-1 text-sm font-semibold text-gray-600 transition duration-100 hover:text-white hover:bg-[#86C2F8] decoration-none">{props.name}</summary>
          <ul class="p-2">
            {props.children}
          </ul>
        </details>
      </li>
    )
} 