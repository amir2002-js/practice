export default function ShowItems({ data }) {
	return (
		<>
			{data.map((part) =>
				part.id == 1 ? (
					<li
						className="text-[10px] hover:text-blue-500 transition-all duration-300 -ms-3"
						key={part.id}
					>
						{part.title}
					</li>
				) : (
					<button
						className="hover:bg-slate-50/20 p-2 rounded truncate"
						key={part.id}
					>
						<li className="flex justify-start items-center gap-3">
							{part.icon}
							{part.title}
						</li>
					</button>
				)
			)}
		</>
	);
}
