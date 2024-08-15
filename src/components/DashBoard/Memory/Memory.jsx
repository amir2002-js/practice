import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts";
import { memory } from "../variable";

export default function Memory() {
	const data = memory;
	return (
		<div className="shadow-4xl rounded-lg pb-10">
			<div className="flex justify-center items-center">
				<RadialBarChart
					width={300}
					height={300}
					innerRadius="40%"
					outerRadius="60%"
					data={data}
					startAngle={360}
					endAngle={0}
				>
					<RadialBar
						minAngle={15}
						label={{ fill: "#fff", position: "insideStart" }}
						background={{ fill: "#fff" }}
						fill="#3b82f6"
						clockWise={true}
						dataKey="حافظه"
					/>
					<Tooltip />
				</RadialBarChart>
			</div>
			<div className="text-center flex flex-col gap-4">
				<div className="flex justify-center items-center gap-2">
					<div className="size-3 rounded-[50%] bg-blue-500"></div>
					<p>حافظه مصرفی : </p>
					<p>{data[1].حافظه}</p>
				</div>
				<div className="">
					<p> مانده : {data[0].حافظه - data[1].حافظه} گیگ </p>
				</div>
			</div>
		</div>
	);
}
