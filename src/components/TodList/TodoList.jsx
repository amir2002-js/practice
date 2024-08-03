import { useState } from "react";
import Btn from "./Btn";
import List from "./List";
import { CiCircleRemove } from "react-icons/ci";
import Select from "./Select";

export default function TodoList() {
	const [todo, setTodo] = useState([]);
	const [showInp, setShowInp] = useState(false);
	const [filterBy, setFilterBy] = useState("all");

	function changeTodo(newTodo){
		newTodo.forEach((item , index) =>{
			item.index = index;
		})

		setTodo(newTodo);
	}

	console.log(filterBy);

	const filteredTodo =
		todo.length > 0
			? todo.filter((t) => {
					if (filterBy === "all") {
						return t.id > 0;
					} else if (filterBy === "complate") {
						return t.isCompleted === true;
					}
					return t.isCompleted === false;
			  })
			: null;

	return (
		<div className="bg-slate-300 min-h-[100vh] flex justify-start items-center gap-4 flex-col relative ">
			{showInp && (
				<div className="w-[100vw] h-screen bg-black/30 text-center fixed flex justify-center items-center">
					<div className=" bg-slate-400 shadow-md te shadow-black sm:p-10 py-10 px-4 rounded-2xl ">
						<div className="flex justify-end">
							<button
								className="shadow rounded-full shadow-black mb-7"
								onClick={() => {
									setShowInp(false);
								}}
							>
								<CiCircleRemove className="text-xl" />
							</button>
						</div>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								const newTodo = [...todo];

								newTodo.push({
									title: e.target[0].value,
									isCompleted: false,
									id:
										newTodo.length != 0
											? newTodo[newTodo.length - 1].id + 1
											: 1,
									index:
										newTodo.length != 0
											? newTodo[newTodo.length - 1].index + 1
											: 0,
								});
								changeTodo(newTodo);
								e.target[0].value = "";
								setShowInp(false);
							}}
							action=""
							className="flex flex-col justify-center items-center w-full gap-20"
						>
							<input
								placeholder="add your job"
								type="text"
								name=""
								id=""
								className="w-[320px] outline-none focus-visible:ring-4 ring-slate-500 rounded-md px-4 py-1 shadow-lg shadow-black"
							/>

							<button className="size-full bg-slate-800 text-white rounded-md w-32 h-10 font-semibold shadow-md shadow-black">
								add
							</button>
						</form>
					</div>
				</div>
			)}
			<div className="container max-w-maxWidth mt-28 flex justify-between items-center z">
				<Btn click={() => setShowInp(true)}>add</Btn>

				<Select setFilterBy={setFilterBy} />
			</div>
			<div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7 container lg:grid-cols-3 justify-center items-center justify-items-center max-w-maxWidth">
				{filteredTodo &&
					filteredTodo.map((t) => (
						<List
							title={t.title}
							key={t.id}
							setTodo={changeTodo}
							todo={todo}
							id={t.id}
							index={t.index}
						/>
					))}
			</div>
		</div>
	);
}
