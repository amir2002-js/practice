
export default function BtnColor({setChoseColor , colors}) {
  return (
    <div className="flex gap-2 mt-5">
				{colors.map((color) => (
					<button
						onClick={() => {
							setChoseColor(color.clr);
						}}
						className={`${color.clr} rounded-[50%] ring-1 ring-slate-700/50 size-6`}
						key={color.id}
					></button>
				))}
			</div>
  )
}
