export default function Btn({ children , click}) {
	return (
		<button
			onClick={click}
			className="bg-slate-700 px-12 py-1 text-white rounded-md hover:ring-4 ring-slate-700 hover:bg-white/0 transition-all duration-300 hover:text-slate-700"
		>
			{children}
		</button>
	);
}
