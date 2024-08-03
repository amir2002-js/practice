import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

export default function List({ title, setTodo , todo , id , index}) {
	return (
		<div
			className={`w-80 h-10 flex ${
				todo[index].isCompleted ? "bg-violet-500" : "bg-violet-400"
			}  justify-between items-center pl-4 shadow-xl shadow-black/50 hover:-translate-y-2 transition-all duration-500`}
		>
			<p className="text-xl">{title}</p>
			<div className="flex">
				<button
					onClick={() => {
                        const change = [...todo];
                        change[index].isCompleted = true;
                        setTodo(change); 
					}}
					className="size-10 text-xl flex justify-center items-center bg-teal-600 hover:bg-teal-800 transition-all duration-300 text-white"
				>
					<CiCircleCheck />
				</button>
				<button
				onClick={() => {
					const change = [...todo];
					const newTodo = change.filter(t => t.id != id)
					setTodo(newTodo); 
					console.log(todo);
				}}
				className="size-10 text-xl flex justify-center items-center bg-red-600 hover:bg-red-800 transition-all duration-300 text-white">
					<CiCircleRemove />
				</button>
			</div>
		</div>
	);
}
