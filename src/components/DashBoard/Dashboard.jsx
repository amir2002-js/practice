import { useState } from "react";
import Grow from "./Datas/Grow";
import NewOrder from "./Datas/NewOrder";
import Navbar from "./navbar/Navbar";
import Search from "./search/Search";
import NewCustomer from "./Datas/NewCustomer";

export default function Dashboard() {
	const [data , setData] = useState([
		{ name: "Page A", uv: 40, pv: 24, amt: 2400 },
		{ name: "Page B", uv: 30, pv: 20, amt: 2000 },
		{ name: "Page C", uv: 45, pv: 30, amt: 2500 },
		{ name: "Page D", uv: 50, pv: 30, amt: 2600 },
		{ name: "Page E", uv: 51, pv: 32, amt: 1800 },
		{ name: "Page F", uv: 55, pv: 30, amt: 1300 },
		{ name: "Page G", uv: 52, pv: 28, amt: 2500 },
		{ name: "Page H", uv: 60, pv: 20, amt: 3000 },
	])
	return (
		<div className="font-iransans-light text-sm flex" dir="rtl">
			<div className="">
				<Navbar />
			</div>
			<div className="w-full">
                <Search />

				<div className="container max-w-maxWidth grid lg:grid-cols-3 grid-cols-1 gap-3 mt-5">
					<NewCustomer data={data} />
					<NewOrder data={data} />
					<Grow data={data} />
				</div>
            </div>
		</div>
	);
}
