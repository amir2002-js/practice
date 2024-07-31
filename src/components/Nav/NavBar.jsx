import { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
	render() {
		return (
			<nav className="fixed top-0 w-full p-3 z-50 bg-white/40">
				<div className="container max-w-maxWidth ">
					<ul className="flex items-center justify-between font-semibold">
						<li>
							<Link to="/">
								<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
									home
								</button>
							</Link>
						</li>
						<li>
							<Link to="/counter">
								<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
									counter
								</button>
							</Link>
						</li>
						<li>
							<Link to="/form">
								<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
									form
								</button>
							</Link>
						</li>
						<li>
							<Link to="/question">
								<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
									question
								</button>
							</Link>
						</li>
						<li>
							<Link to="/book-list">
								<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
									book list
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
