import { useEffect, useState } from "react";
import Grow from "./Datas/Grow";
import NewOrder from "./Datas/NewOrder";
import Navbar from "./navbar/Navbar";
import Search from "./search/Search";
import NewCustomer from "./Datas/NewCustomer";
import MainChart from "./MainChart/MainChart";

export default function Dashboard() {
	const [data1, setData1] = useState([
		{ name: "Page A", uv: 40, pv: 24, amt: 2400 },
		{ name: "Page B", uv: 30, pv: 20, amt: 2000 },
		{ name: "Page C", uv: 45, pv: 30, amt: 2500 },
		{ name: "Page D", uv: 50, pv: 30, amt: 2600 },
		{ name: "Page E", uv: 51, pv: 32, amt: 1800 },
		{ name: "Page F", uv: 55, pv: 30, amt: 1300 },
		{ name: "Page G", uv: 52, pv: 28, amt: 2500 },
		{ name: "Page H", uv: 60, pv: 20, amt: 3000 },
	]);

	const [data2, setData2] = useState([
		{ name: "بهمن 1", درآمد: "40", pv: "40$", amt: 2400 },
		{ name: "بهمن 4", درآمد: "30", pv: "30$", amt: 2000 },
		{ name: "بهمن 7", درآمد: "45", pv: "45$", amt: 2500 },
		{ name: "بهمن 10", درآمد: "50", pv: "50$", amt: 2600 },
		{ name: "بهمن 13", درآمد: "20", pv: "20$", amt: 1800 },
		{ name: "بهمن 16", درآمد: "55", pv: "55$", amt: 1300 },
		{ name: "بهمن 19", درآمد: "52", pv: "52$", amt: 2500 },
		{ name: "بهمن 22", درآمد: "60", pv: "60$", amt: 3000 },
		{ name: "بهمن 25", درآمد: "60", pv: "60$", amt: 3000 },
		{ name: "بهمن 28", درآمد: "53", pv: "530$", amt: 3000 },
		{ name: "اسفند 1", درآمد: "70", pv: "70$", amt: 3000 },
	]);
	// ببینیم نمودار روی روز ماه یا ساله
	const [active, setActive] = useState(["ماه"]);

	useEffect(() => {
		if (active == "روز") {
			setData2([
				{ name: "اسفند 00:00", درآمد: "0", pv: "0$", amt: 2400 },
				{ name: "اسفند 01:00", درآمد: "0", pv: "0$", amt: 2000 },
				{ name: "اسفند 02:00", درآمد: "0", pv: "0$", amt: 2500 },
				{ name: "اسفند 03:00", درآمد: "0", pv: "0$", amt: 2600 },
				{ name: "اسفند 04:00", درآمد: "0", pv: "0$", amt: 1800 },
				{ name: "اسفند 05:00", درآمد: "0", pv: "0$", amt: 1300 },
				{ name: "اسفند 06:00", درآمد: "0", pv: "0$", amt: 2500 },
				{ name: "اسفند 07:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 08:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 09:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 10:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 11:00", درآمد: "1", pv: "1$", amt: 3000 },
				{ name: "اسفند 12:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 13:00", درآمد: "5", pv: "5$", amt: 3000 },
				{ name: "اسفند 14:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 15:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 17:00", درآمد: "1", pv: "1$", amt: 3000 },
				{ name: "اسفند 18:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 19:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 20:00", درآمد: "6", pv: "6$", amt: 3000 },
				{ name: "اسفند 21:00", درآمد: "1", pv: "1$", amt: 3000 },
				{ name: "اسفند 22:00", درآمد: "1", pv: "1$", amt: 3000 },
				{ name: "اسفند 23:00", درآمد: "0", pv: "0$", amt: 3000 },
				{ name: "اسفند 24:00", درآمد: "0", pv: "0$", amt: 3000 },
			]);
		} else if (active == "ماه") {
			setData2([
				{ name: "بهمن 1", درآمد: "40", pv: "40$", amt: 2400 },
				{ name: "بهمن 4", درآمد: "30", pv: "30$", amt: 2000 },
				{ name: "بهمن 7", درآمد: "45", pv: "45$", amt: 2500 },
				{ name: "بهمن 10", درآمد: "50", pv: "50$", amt: 2600 },
				{ name: "بهمن 13", درآمد: "20", pv: "20$", amt: 1800 },
				{ name: "بهمن 16", درآمد: "55", pv: "55$", amt: 1300 },
				{ name: "بهمن 19", درآمد: "52", pv: "52$", amt: 2500 },
				{ name: "بهمن 22", درآمد: "60", pv: "60$", amt: 3000 },
				{ name: "بهمن 25", درآمد: "60", pv: "60$", amt: 3000 },
				{ name: "بهمن 28", درآمد: "53", pv: "530$", amt: 3000 },
				{ name: "اسفند 1", درآمد: "70", pv: "70$", amt: 3000 },
			]);
		} else {
			setData2([
				{ name: "فروردین", درآمد: "120", pv: "120$", amt: 2400 },
				{ name: "اردیبهشت", درآمد: "100", pv: "100$", amt: 2000 },
				{ name: "خرداد", درآمد: "135", pv: "135$", amt: 2500 },
				{ name: "تیر", درآمد: "150", pv: "150$", amt: 2600 },
				{ name: "مرداد", درآمد: "160", pv: "160$", amt: 1800 },
				{ name: "شهریور", درآمد: "105", pv: "105$", amt: 1300 },
				{ name: "مهر", درآمد: "156", pv: "156$", amt: 2500 },
				{ name: "آبان", درآمد: "160", pv: "160$", amt: 3000 },
				{ name: "آذر", درآمد: "110", pv: "110$", amt: 3000 },
				{ name: "دی", درآمد: "259", pv: "259$", amt: 3000 },
				{ name: "بهمن", درآمد: "210", pv: "210$", amt: 3000 },
				{ name: "اسفند", درآمد: "220", pv: "220$", amt: 3000 },
			]);
		}
	}, [active]);

	return (
		<div className="font-iransans-light text-sm flex" dir="rtl">
			<div className="w-80">
				<Navbar />
			</div>
			<div className="w-full">
				<Search />
				<div className="container max-w-maxWidth">
					<div className=" grid lg:grid-cols-3 grid-cols-1 gap-3 mt-5">
						<NewCustomer data={data1} />
						<NewOrder data={data1} />
						<Grow data={data1} />
					</div>
					<div className="">
						<MainChart
							data={data2}
							setActive={setActive}
							active={active}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
