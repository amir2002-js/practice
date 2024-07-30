import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/NavBar";

export default function Layout() {
	return (
		<div className="">
			<NavBar />
			<Outlet />
		</div>
	);
}
