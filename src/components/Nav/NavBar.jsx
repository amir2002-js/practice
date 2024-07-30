import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
	render() {
		return (
			<nav className="fixed top-0 w-full p-3 z-50 bg-white/40">
				<div className="container max-w-maxWidth ">
					<ul className="flex gap-3 font-semibold">
						<li>
							<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
								<Link to="/">home</Link>
							</button>
						</li>
						<li>
							<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
								<Link to="/counter">counter</Link>
							</button>
						</li>
						<li>
							<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
								<Link to="/form">form</Link>
							</button>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
