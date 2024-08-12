import {
	LuLayoutDashboard,
	LuMessageSquare,
	LuSend,
	LuUnlock,
} from "react-icons/lu";

export default function Navbar() {
	return (
		<div className="w-64 min-h-screen bg-slate-800 text-white">
            <div className="px-3 pt-3 pb-6">
                <button className="flex flex-row-reverse font-ABSTER text-3xl">
                    <p className="font-light">AMIR</p>
                    <p className="font-bold text-yellow-400">DEV</p>
                </button>
            </div>
			<ul className="flex flex-col gap-5 px-6">
				<button className="hover:bg-slate-50/20 p-2 rounded">
					<li className="flex justify-start items-center gap-3">
						<LuLayoutDashboard className="text-xl" />
						داشبورد
					</li>
				</button>
				<button className="hover:bg-slate-50/20 p-2 rounded">
					<li className="flex justify-start items-center gap-3">
						<LuSend className="text-xl" />
						ایمیل
					</li>
				</button>
				<button className="hover:bg-slate-50/20 p-2 rounded">
					<li className="flex justify-start items-center gap-3">
						<LuMessageSquare className="text-xl" />
						گفت و گو
					</li>
				</button>
				<button className="hover:bg-slate-50/20 p-2 rounded">
					<li className="flex justify-start items-center gap-3">
						<LuUnlock className="text-xl" />
						احراز هویت
					</li>
				</button>
			</ul>
		</div>
	);
}
