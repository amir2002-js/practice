import { Bar, ComposedChart } from "recharts";

export default function NewOrder({data}) {
	const ourData = data;
	return (
		<div className="flex justify-between items-center p-5 rounded-md shadow-4xl">
			<div className="flex flex-col gap-2">
				<p>سفارشات جدید</p>
				<p>35,084</p>
				<p className="text-rose-600">-2.8%</p>
			</div>
			<div className="">
				<ComposedChart width={120} height={50} data={ourData}>
					<Bar dataKey="pv" barSize={20} fill="#3b82f6" />
				</ComposedChart>
			</div>
		</div>
	);
}
