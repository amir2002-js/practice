import { useState } from "react";
import Input from "./Input";

export default function Form() {
	const [firstName, setFN] = useState({val : "", placeholder : "first name", validate: true , id:0});
	const [lastName, setLN] = useState({val : "", placeholder : "last name", validate: true , id:1});
	const [email, setE] = useState({val : "", placeholder : "email", validate: true , id:2});

	function inpHandler(e) {
		e.preventDefault();
		e.target[0].value.length > 2
			? setFN({val: e.target[0].value , placeholder : "first name", validate: true , id:0})
			:  setFN({val: "" , placeholder : "first name", validate: false , id:0})
		e.target[1].value.length > 2
			? setLN({val : e.target[1].value, placeholder : "last name", validate: true , id:1})
			: setLN({val : "", placeholder : "last name", validate: false , id:1})
		e.target[2].value.length > 2
			? setE({val : e.target[2].value, placeholder : "email", validate: true , id:2})
			: setE({val : "", placeholder : "email", validate: false , id:2})
		e.target[2].value = ""
		e.target[1].value = ""
		e.target[0].value = ""
	}

	return (
		<div className="h-[100vh] bg-green-700 flex justify-center items-center">
			<div className="bg-white p-7 rounded-sm shadow flex justify-center items-stretch flex-col w-[400px]">
				<form
					action=""
					className="flex flex-col gap-10"
					onSubmit={inpHandler}
				>
					
						<div className="relative" >
							<Input placeholder={firstName.placeholder} />
							{!firstName.validate? (<p className="absolute text-red-500 font-medium">
								{`your ${firstName.placeholder} is not valid`}
							</p>) : null}
						</div>
						<div className="relative" >
							<Input placeholder={lastName.placeholder} />
							{!lastName.validate? (<p className="absolute text-red-500 font-medium">
								{`your ${lastName.placeholder} is not valid`}
							</p>) : null}
						</div>
						<div className="relative" >
							<Input placeholder={email.placeholder} />
							{!email.validate? (<p className="absolute text-red-500 font-medium">
								{`your ${email.placeholder} is not valid`}
							</p>) : null}
						</div>
					
					
					<button
						className="bg-green-700 text-white py-2 rounded-sm mt-5 hover:bg-white/0 hover:ring-4 ring-green-700 hover:text-black transition-all duration-300"
						onSubmit={inpHandler}
					>
						submit
					</button>
				</form>
			</div>
		</div>
	);
}
