import { LineChart, Line } from "recharts";

export default function Grow({data}) {
	const ourData = data

	return (
		<div className="flex justify-between items-center p-5 rounded-md shadow-4xl">
			<div className="flex flex-col gap-2">
				<p>رشد</p>
				<p>89.87%</p>
				<p className="text-teal-600">+2.8%</p>
			</div>
			<div className="">
				<LineChart width={120} height={50} data={ourData}>
					<Line
						type="monotone"
						dataKey="uv"
						stroke="#3b82f6"
						strokeWidth={2}
                        dot={false}
					/>
				</LineChart>
			</div>
		</div>
	);
}
