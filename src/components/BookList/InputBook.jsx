
export default function InputBook({ label}) {
	return (
		<div className="flex flex-col gap-1.5">
			<label className="text-slate-500 text-lg font-medium" htmlFor="">
				{label}
			</label>
			<input
				className="bg-[#EEEEEE] px-3 py-1 outline-none focus-visible:ring-4 rounded-sm ring-[#00ADB5]"
				type="text"
				name=""
				id=""
			/>
		</div>
	);
}
