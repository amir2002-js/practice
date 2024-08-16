import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import Btngroup from "./Btngroup";

export default function MainChart({ data , setActive , active}) {

    function changeChartActive(newActive) {
        setActive(newActive);
    }

	return (
		<div className=" rounded-md shadow-4xl mt-10 py-5 pr-12">
			<div className="flex justify-between items-center py-5 pl-12">
				<div className="flex flex-col items-start gap-3">
					<p>درآمد</p>
					<p>نمودار فعالیت های تجاری</p>
				</div>
				<Btngroup changeChart={changeChartActive} active={active} />
			</div>
			<div className=" hover:cursor-pointer w-full h-52">
				<ResponsiveContainer>
					<LineChart
						width={730}
						height={250}
						data={data}
						margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
					>
						<CartesianGrid strokeDasharray="5 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line
							type="monotone"
							dataKey="درآمد"
							stroke="#3b82f6"
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
