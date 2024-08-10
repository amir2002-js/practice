import { BrowserRouter, Route, Routes } from "react-router-dom";
import AsyncAwait from "./components/Async&Await/AsyncAwait";
import Counter from "./components/Counter/Counter";
import Layout from "./Layout";
import Form from "./components/Form/Form";
import Questions from "./components/Questions/Questions";
import BookList from "./components/BookList/BookList";
import Shop from "./components/shopping/Shop";
import TodoList from "./components/TodList/TodoList";
import NotePad from "./components/NotePad/NotePad";
import Products from "./components/Products/Products";
import ShowProducts from "./components/Products/ShowProducts";

export const App = () => {
	let users = AsyncAwait();
	console.log(users);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="counter" element={<Counter />} />
					<Route path="form" element={<Form />} />
					<Route path="question" element={<Questions />} />
					<Route path="book-list" element={<BookList />} />
					<Route path="shop" element={<Shop />} />
					<Route path="todo-list" element={<TodoList />} />
					<Route path="note-pad" element={<NotePad />} />
					<Route path="note-pad" element={<NotePad />} />
					<Route path="products" element={<Products />} />
					<Route path="products/:id" element={<ShowProducts />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
