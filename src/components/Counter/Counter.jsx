import { Component } from "react";
import Btn from "./Btn";

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}
	render() {
		return (
			<div className="h-[100vh] bg-slate-950 relative flex justify-center items-center z-10">
				{/* bubles */}
				<div className="absolute rounded-s-[50%] rounded-3xl blur-[100px] rotate-12 top-96 z-10 right-24 w-96 h-44 bg-blue-400"></div>
				<div className="absolute rounded-s-[50%] rounded-3xl blur-[100px] rotate-12 top-24 z-10 right-96 w-96 h-44 bg-purple-500"></div>
				<div className="absolute rounded-s-[50%] rounded-3xl blur-[100px] -rotate-12 top-24 z-10 w-96 left-6 h-44 bg-pink-500"></div>

				{/* cart */}
				<div className="w-8/12 h-[50%] bg-blue-200/20 border border-white rounded-lg absolute z-50 p-6 flex flex-col justify-evenly items-center">
					{/* show count */}
					<div className="flex flex-col justify-evenly items-center gap-4">
						<p className="text-2xl font-bold">COUNTER:</p>
						<p>{this.state.count}</p>
					</div>

					{/* btn box */}
					<div className="flex items-center gap-6">
						<Btn className={"hover:bg-green-500"} click={() => {
                            this.setState({count : this.state.count + 1})
                        }}>add</Btn>

						<Btn className={"hover:bg-red-500"} click={() => {
                            this.setState((prevState) => {
                                console.log(prevState);
                                return({count : prevState.count - 1})
                            })
                        }}>remove</Btn>
					</div>
				</div>
			</div>
		);
	}
}
