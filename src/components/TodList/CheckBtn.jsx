import { CiCircleCheck } from "react-icons/ci";

export default function CheckBtn({ todo, index, setTodo }) {
	return (
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
	);
}
