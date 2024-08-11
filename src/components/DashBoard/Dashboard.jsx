import Navbar from "./navbar/Navbar";
import Search from "./search/Search";

export default function Dashboard() {
	return (
		<div className="font-iransans-light text-sm flex" dir="rtl">
			<div className="">
				<Navbar />
			</div>
			<div className="w-full">
                <Search />
            </div>
		</div>
	);
}
