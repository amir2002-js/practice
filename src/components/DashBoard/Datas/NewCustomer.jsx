import { Line, LineChart } from "recharts";

export default function NewCustomer({data}) {
    const ourData = data
	return (
		<div className="flex justify-between items-center p-5 rounded-md shadow-4xl">
			<div className="flex flex-col gap-2">
				<p>مشتریان جدید</p>
				<p>3,897</p>
				<p className="text-rose-600">+3.3%</p>
			</div>
			<div className="">
            <LineChart width={120} height={50} data={ourData}>
					<Line
						type="monotone"
						dataKey="amt"
						stroke="#3b82f6"
						strokeWidth={2}
                        dot={false}
					/>
				</LineChart>
			</div>
		</div>
	);
}
