export default function Select({ setFilterBy }) {
	return (
		<select
			onChange={(e) => {
				setFilterBy(e.target.value);
			}}
			className="size-full bg-slate-800 rounded-md w-32 h-10 text-center  shadow-md shadow-black text-white font-semibold"
		>
			<option value="all">all</option>
			<option value="complate">complate</option>
			<option value="unComplate">unComplate</option>
		</select>
	);
}
