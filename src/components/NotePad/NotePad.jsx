import { useState } from "react";
import BtnColor from "./BtnColor";
import ShowNotes from "./ShowNotes";

export default function NotePad() {
	const [colors, setColors] = useState([
		{ id: 0, clr: "bg-white" },
		{ id: 1, clr: "bg-red-400" },
		{ id: 2, clr: "bg-blue-400" },
		{ id: 3, clr: "bg-yellow-400" },
		{ id: 4, clr: "bg-orange-400" },
		{ id: 5, clr: "bg-pink-400" },
		{ id: 6, clr: "bg-purple-400" },
		{ id: 7, clr: "bg-green-400" },
		{ id: 8, clr: "bg-fuchsia-400" },
	]);
	const [choseColor, setChoseColor] = useState("bg-white");
	const [notes, setNotes] = useState([]);

	return (
		<div className="h-screen bg-slate-200 flex justify-center items-center flex-col">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (e.target[0].value.length > 0) {
						const oldNote = [...notes];
						const newItem = {
							title: e.target[0].value,
							color: choseColor,
							id:
								oldNote.length > 0
									? oldNote[oldNote.length - 1].id + 1
									: 0,
						};
						oldNote.push(newItem);
						setNotes(oldNote);
						e.target[0].value = "";
					}
				}}
				action=""
				className="w-[90%] md:w-[70%] lg:w-[50%] max-w-maxWidth"
			>
				<input
					type="text"
					className={`${choseColor} transition-all duration-300 shadow-lg shadow-black/50 rounded py-1 px-4 outline-none focus-visible:ring-4 w-full ring-blue-900/60`}
				/>
			</form>
			<BtnColor colors={colors} setChoseColor={setChoseColor} />
			<ShowNotes notes={notes} setNotes={setNotes} />
		</div>
	);
}
