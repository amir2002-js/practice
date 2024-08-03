import { useState } from "react";

export default function NotePad() {
	const [colors, setColors] = useState([
		"bg-red-400",
		"bg-blue-400",
		"bg-yellow-400",
		"bg-orange-400",
		"bg-pink-400",
		"bg-purple-400",
		"bg-green-400",
		"bg-fuchsia-400",
	]);
    
	return (
		<div className="h-screen bg-fuchsia-300">
			<input type="text" className="" />
		</div>
	);
}
