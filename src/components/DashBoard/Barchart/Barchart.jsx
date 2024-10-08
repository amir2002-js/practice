import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend, ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function Barchart({ data }) {
	return (
		<div className="p-5 px-10 shadow-4xl rounded-lg my-5 ">
			<div className="m-5">
				<p>تعداد فروش سالانه</p>
			</div>
			<div className=" w-full ">
				<BarChart width={400} height={300} data={data}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar
						dataKey="تعدادفروش"
						fill="#3b82f6"
						barSize={15}
						radius={5}
						background={{ radius: 5 }}
					/>
				</BarChart>

			</div>
		</div>
	);
}
