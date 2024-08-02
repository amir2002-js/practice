import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

export default function List() {
	return (
		<div className="w-80 h-10 flex bg-violet-400 justify-between items-center pl-4">
			<p className="text-xl">list</p>
			<div className="flex">
				<button className="size-10 text-xl flex justify-center items-center bg-teal-600 hover:bg-teal-800 transition-all duration-300 text-white">
					<CiCircleCheck />
				</button>
				<button className="size-10 text-xl flex justify-center items-center bg-red-600 hover:bg-red-800 transition-all duration-300 text-white">
					<CiCircleRemove />
				</button>
			</div>
		</div>
	);
}
