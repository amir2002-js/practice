import React from "react";
import Notif from "./Notif";

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			firsName: "",
			lastName: "",
			email: "",
			valFN: "",
			valLN: "",
			valE: "",
			valid: false,
		};
		this.subHandler.bind(this.subHandler);
	}
	subHandler(e) {
		e.preventDefault();
		e.target[0].value.length > 2
			? this.setState({ firstName: e.target[0].value, valFN: "true" })
			: this.setState({ valFN: "false" });
		e.target[1].value.length > 2
			? this.setState({ lastName: e.target[1].value, valFN: "true" })
			: this.setState({ valLN: "false" });
		e.target[2].value.length > 12
			? this.setState({ email: e.target[2].value, valFN: "true" })
			: this.setState({ valE: "false" });

		if (
			this.state.valE === "true" &&
			this.state.valFN === "true" &&
			this.state.valE === "true"
		) {
			this.setState({ valid: true });
			setTimeout(() => {
				this.setState({ valid: false });
			}, 3000);
		}
	}

	render() {
		return (
			<div className="h-[100vh] bg-green-700 flex justify-center items-center">
				
				<div className="bg-white p-7 rounded-sm shadow flex justify-center items-stretch flex-col w-[400px]">
					<form
						action=""
						className="flex flex-col gap-6"
						onSubmit={(e) => this.subHandler(e)}
					>
						<input
							type="text"
							name=""
							id=""
							placeholder="first name"
							className="py-2 px-4 outline-none focus-visible:ring-[2px] ring-green-700 bg-slate-200 rounded-sm "
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="last name"
							className="py-2 px-4 outline-none focus-visible:ring-[2px] ring-green-700 bg-slate-200 rounded-sm "
						/>
						<input
							type="text"
							name=""
							id=""
							placeholder="email"
							className="py-2 px-4 outline-none focus-visible:ring-[2px] ring-green-700 bg-slate-200 rounded-sm "
						/>
						<button
							className="bg-green-700 text-white py-2 rounded-sm mt-5"
							onSubmit={this.subHandler}
						>
							submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}
