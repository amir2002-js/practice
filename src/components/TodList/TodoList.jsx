import Btn from "./Btn";
import List from "./List";

export default function TodoList() {
	return (
		<div className="bg-slate-300 min-h-[100vh] flex justify-start items-center gap-4 flex-col relative ">
			<div className="fixed top-[30%]  bg-slate-400 shadow-md shadow-black p-10 rounded-2xl ">
				<form
					action=""
					className="flex flex-col justify-center items-center w-full gap-20"
				>
					<div className="flex flex-col justify-center items-center gap-5">
						<label htmlFor="" className="font-semibold">add your job</label>
						<input
							type="text"
							name=""
							id=""
							className=" w-[320px] outline-none focus-visible:ring-4 ring-slate-500 rounded-md px-4 py-1 shadow-lg shadow-black"
						/>
					</div>
					<Btn>add</Btn>
				</form>
			</div>
			<div className="container max-w-maxWidth mt-28 flex justify-between items-center z">
				<Btn>add</Btn>

				<select className="size-full bg-slate-800 rounded-md w-32 h-10 text-center  shadow-md shadow-black text-white font-semibold">
					<option value="all">all</option>
					<option value="complate">complate</option>
					<option value="unComplate">unComplate</option>
				</select>
			</div>
		</div>
	);
}
