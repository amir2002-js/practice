import { Component } from "react";
import Links from "./Links";
import { CiCircleRemove, CiMenuBurger } from "react-icons/ci";


export default class NavBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			link: [
				{
					address: "/",
					title: "home",
					id: 1,
				},
				{
					address: "/form",
					title: "form",
					id: 2,
				},
				{
					address: "/counter",
					title: "counter",
					id: 3,
				},
				{
					address: "/shop",
					title: "shop",
					id: 4,
				},
				{
					address: "/todo-list",
					title: "todo list",
					id: 5,
				},
				{
					address: "/book-list",
					title: "booklist",
					id: 6,
				},
				{
					address: "/question",
					title: "question",
					id: 7,
				},
				{
					address: "/note-pad",
					title: "note pad",
					id: 8,
				},
				{
					address: "/products",
					title: "products",
					id: 8,
				},
			],
			isOpen: false,
		};
	}
	render() {
		return (
			<>
				<nav className="fixed top-0 w-full p-3 z-50 bg-white/40">
					<div className="container max-w-maxWidth ">
						<button
							onClick={() => {
								this.setState({ isOpen: !this.state.isOpen });
								console.log(this.state);
							}}
							className="text-[36Px] p-3 hover:bg-slate-300 rounded-md"
						>
							<CiMenuBurger />
						</button>
						<ul
							className={`${
								this.state.isOpen ? "" : "-translate-x-64"
							} transition-all duration-300 flex flex-col gap-3 items-start p-2 font-semibold fixed bg-slate-50 h-screen top-0 left-0 w-64`}
						>
							<button
								onClick={() => {
									this.setState({ isOpen: false });
									console.log(this.state);
								}}
								className="text-[36Px] p-3 hover:bg-slate-300 rounded-md text-end"
							>
								<CiCircleRemove />
							</button>
							{this.state.link.map((link) => (
								<Links
									to={link.address}
									title={link.title}
									key={link.id}
								/>
							))}
						</ul>
					</div>
				</nav>
			</>
		);
	}
}
