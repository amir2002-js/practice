import { useEffect, useState } from "react";
import Grow from "./Datas/Grow";
import NewOrder from "./Datas/NewOrder";
import Navbar from "./navbar/Navbar";
import Search from "./search/Search";
import NewCustomer from "./Datas/NewCustomer";
import MainChart from "./MainChart/MainChart";
import Barchart from "./Barchart/Barchart";
import { varDailiesData, varData, varMothlyData, varYearlyData } from "./variable";

export default function Dashboard() {
	const [data, setData] = useState(varData);
	const [dailyData , setDailyData] = useState(varDailiesData);
	const [mothlyData , setMothlyData] = useState(varMothlyData);
	const [yearlyData , setYearlyData] = useState(varYearlyData);
	const [mainData, setMainData] = useState(mothlyData);
	// ببینیم نمودار روی روز ماه یا ساله
	const [active, setActive] = useState(["ماه"]);

	useEffect(() => {
		if (active == "روز") {
			setMainData(dailyData);
		} else if (active == "ماه") {
			setMainData(mothlyData);
		} else {
			setMainData(yearlyData);
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
						<NewCustomer data={data} />
						<NewOrder data={data} />
						<Grow data={data} />
					</div>
					<div className="">
						<MainChart
							data={mainData}
							setActive={setActive}
							active={active}
						/>
					</div>
					<div className="">
						<div className="mt-10">
							<Barchart data={yearlyData} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
