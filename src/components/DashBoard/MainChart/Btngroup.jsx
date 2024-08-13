export default function Btngroup({ changeChart , active }) {

	return (
		<div className="">
			<button className={`px-3 py-1 bg-white border border-blue-500 rounded-s-md hover:bg-blue-500 hover:text-white ${active == "روز" ? "bg-blue-500 text-white": null } transition-all duration-300`} onClick={(e) => {
                changeChart(e.target.innerHTML)
            }}>
				روز
			</button>
			<button className={`px-3 py-1 bg-white border border-blue-500 hover:bg-blue-500 hover:text-white ${active == "ماه" ? "bg-blue-500 text-white": null } transition-all duration-300`} onClick={(e) => {
                changeChart(e.target.innerHTML)
            }}>
				ماه
			</button>
			<button className={`px-3 py-1 bg-white border border-blue-500 rounded-e-md hover:bg-blue-500 hover:text-white ${active == "سال" ? "bg-blue-500 text-white": null } transition-all duration-300`} onClick={(e) => {
                changeChart(e.target.innerHTML)
            }}>
				سال
			</button>
		</div>
	);
}
