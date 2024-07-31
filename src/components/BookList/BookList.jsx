import { FaBookOpen } from "react-icons/fa";
import InputBook from "./InputBook";
import List from "./List";
import { useState } from "react";

export default function BookList() {

	const [data, setData] = useState([]);
	const [count, setCount] = useState(0);

	function submitHandler(e) {
		e.preventDefault();
		if(e.target[2].value.length > 2 && e.target[1].value.length > 2 && e.target[0].value.length > 2){const oldData = [...data];
		oldData.push( {
			title: e.target[0].value,
			author: e.target[1].value,
			year: e.target[2].value,
			id: count,
		})

        setCount(count + 1)

        setData(oldData);


        e.target[2].value = ""
        e.target[1].value = ""
        e.target[0].value = ""
        
    
    }


	}

	return (
		<div className="bg-[#222831] min-h-[100vh]">
			{/* header */}
			<h1 className="flex justify-center items-center gap-6 pt-24 pb-12">
				<p className="text-3xl font-semibold">
					welcom to <span className="text-[#00ADB5]"> amir.jsx </span>
					book list
				</p>
				<FaBookOpen className="text-[80px] text-[#00ADB5]" />
			</h1>

			{/* inputs */}
			<div className="">
				<form
					action=""
					onSubmit={submitHandler}
					className="flex flex-col gap-12 container max-w-maxWidth "
				>
					<InputBook label={"title"} />
					<InputBook label={"author"} />
					<InputBook label={"year"} />

					<button
						onSubmit={submitHandler}
						className="bg-[#00ADB5] rounded-sm p-1 mt-5 hover:ring-4 ring-[#00ADB5] hover:bg-black/0 font-medium text-lg hover:text-[#EEEEEE] transition-all duration-300"
					>
						add
					</button>
				</form>
			</div>

			<List data={data} />
		</div>
	);
}
