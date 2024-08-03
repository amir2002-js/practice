import { Link } from "react-router-dom";

export default function Links({to , title}) {
	return (
		<li>
			<Link to={to}>
				<button className="px-4 py-1 rounded-md hover:bg-slate-300 transition-all duration-200">
					{title}
				</button>
			</Link>
		</li>
	);
}
