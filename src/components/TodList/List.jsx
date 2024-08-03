import CheckBtn from "./CheckBtn";
import RemoveBtn from "./RemoveBtn";

export default function List({ title, setTodo, todo, id, index }) {
	return (
		<div
			className={`w-80 h-10 flex ${
				todo[index].isCompleted ? "bg-violet-500" : "bg-violet-400"
			}  justify-between items-center pl-4 shadow-xl shadow-black/50 hover:-translate-y-2 transition-all duration-500`}
		>
			<p className="text-xl">{title}</p>
			<div className="flex">
				<CheckBtn todo={todo} index={index} setTodo={setTodo} />
				<RemoveBtn todo={todo} setTodo={setTodo} id={id} />
			</div>
		</div>
	);
}
