import { CiCircleRemove } from "react-icons/ci";

export default function RemoveBtn({ todo, setTodo, id }) {
	return (
		<button
			onClick={() => {
				const change = [...todo];
				const newTodo = change.filter((t) => t.id != id);
				setTodo(newTodo);
				console.log(todo);
			}}
			className="size-10 text-xl flex justify-center items-center bg-red-600 hover:bg-red-800 transition-all duration-300 text-white"
		>
			<CiCircleRemove />
		</button>
	);
}
