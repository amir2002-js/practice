import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/counter" element={<Counter />} />
					
			</Routes>
		</BrowserRouter>
	);
};
