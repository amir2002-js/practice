import { LuBell, LuMail, LuSearch } from "react-icons/lu";

export default function Search() {
	return (
		<div className="bg-slate-200 shadow flex w-full p-4 justify-between items-center px-10">
			<form className="flex w-1/2">
				<button>
					<LuSearch className="text-xl" />
				</button>
				<input
					type="text"
					className="w-full bg-transparent outline-none focus-visible:border-b border-black/50 p-2"
				/>
			</form>
			<div className="flex justify-between items-center gap-5">
				<button className="before:w-2 before:h-2 before:bg-red-600 before:absolute before:rounded-[50%]">
					<LuMail className="text-2xl" />
				</button>
				<button>
					<LuBell className="text-2xl" />
				</button>
				<img
					src="../src/img/profile.jpg"
					alt=""
					className="w-10 rounded-[50%]"
				/>
			</div>
		</div>
	);
}
