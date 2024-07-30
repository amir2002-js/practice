export default function Form() {
	return (
		<div className="h-[100vh] bg-green-700 flex justify-center items-center">
			<div className="bg-white p-7 rounded-sm shadow flex justify-center items-stretch gap-10 flex-col w-[400px]">
				<form action="" className="flex flex-col gap-5">
					<input type="text" name="" id="" placeholder="first name" className="py-1 px-2 bg-slate-200 rounded-sm " />
					<input type="text" name="" id="" placeholder="last name" className="py-1 px-2 bg-slate-200 rounded-sm " />
					<input type="text" name="" id="" placeholder="email" className="py-1 px-2 bg-slate-200 rounded-sm " />
				</form>
                <button className="bg-green-700 text-white py-1">submit</button>
			</div>
		</div>
	);
}
