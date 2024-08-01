import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Layout from "./Layout";
import Form from "./components/Form/Form";
import Questions from "./components/Questions/Questions";
import BookList from "./components/BookList/BookList";
import Shop from "./components/shopping/Shop";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="counter" element={<Counter />} />
					<Route path="form" element={<Form />} />
					<Route path="question" element={<Questions />} />
					<Route path="book-list" element={<BookList />} />
					<Route path="shop" element={<Shop />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
