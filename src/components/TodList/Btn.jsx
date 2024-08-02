export default function Btn({ children, click }) {
	return (
		<button
			onClick={() => click()}
			className="size-full bg-slate-800 text-white rounded-md w-32 h-10 font-semibold shadow-md shadow-black"
		>
			{children}
		</button>
	);
}
