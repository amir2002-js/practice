import { useState } from "react";
import {
	LuBarChart3,
	LuCalendar,
	LuCode2,
	LuCodepen,
	LuFigma,
	LuFile,
	LuFileBox,
	LuFileStack,
	LuFingerprint,
	LuGrid,
	LuMail,
	LuMessageSquare,
	LuMonitor,
	LuMonitorSmartphone,
	LuStar,
	LuWebhook,
} from "react-icons/lu";
import ShowItems from "./ShowItems";

export default function Navbar() {
	const [parts, setParts] = useState({
		webpart1: [
			{ id: 1, title: "برنامه های وب" },
			{ icon: <LuMail className="text-xl"/>, id: 2, title: "ایمیل" },
			{ icon: <LuMessageSquare className="text-xl"/>, id: 3, title: "گفتگو" },
			{ icon: <LuCalendar className="text-xl"/>, id: 4, title: "رویداد های تقویم" },
			{ icon: <LuCalendar className="text-xl"/>, id: 5, title: "رویداد های تقویم میلادی" },
		],
		webpart2: [
			{ icon: <LuCodepen className="text-xl"/>, id: 1, title: "کامپوننت ها" },
			{ icon: <LuMonitor className="text-xl"/>, id: 2, title: "عناصر UI" },
			{ icon: <LuMonitorSmartphone className="text-xl"/>, id: 3, title: "عناصر پیشرفته UI" },
			{ icon: <LuFileStack className="text-xl"/>, id: 4, title: "فرم ها" },
			{ icon: <LuBarChart3 className="text-xl"/>, id: 5, title: "نمودار ها" },
			{ icon: <LuGrid className="text-xl"/>, id: 6, title: "جدول ها" },
			{ icon: <LuStar className="text-xl"/>, id: 7, title: "آیکون ها" },
		],
		webpart3: [
			{ icon: <LuFile className="text-xl"/>, id: 1, title: "صفحات" },
			{ icon: <LuFileBox className="text-xl"/>, id: 2, title: "ویژگی صفحات" },
			{ icon: <LuFingerprint className="text-xl"/>, id: 3, title: "احراز هویت" },
			{ icon: <LuFigma className="text-xl"/>, id: 4, title: "خطا" },
		],
	});

	return (
		<div className="w-64 fixed h-[100vh] bg-slate-800 text-white overflow-y-auto scroll">
			<div className="px-3 pt-3 pb-6">
				<button className="flex flex-row-reverse font-ABSTER text-3xl">
					<p className="font-light">AMIR</p>
					<p className="font-bold text-yellow-400">DEV</p>
				</button>
			</div>
			<ul className="flex flex-col gap-5 px-6 ">
				<ShowItems data={parts.webpart1} />
				<ShowItems data={parts.webpart2} />
				<ShowItems data={parts.webpart3} />
			</ul>
		</div>
	);
}
