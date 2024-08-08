import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import AsyncAwait from "./components/Async&Await/AsyncAwait";

import routes from "./routes";
export const App = () => {
	let users = AsyncAwait();
	console.log(users);
	let routers = useRoutes(routes)
	return (
		{routers}
		// <BrowserRouter>
		// 	<Routes>
		// 		<Route path="/" element={<Layout />}>
		// 			<Route path="counter" element={<Counter />} />
		// 			<Route path="form" element={<Form />} />
		// 			<Route path="question" element={<Questions />} />
		// 			<Route path="book-list" element={<BookList />} />
		// 			<Route path="shop" element={<Shop />} />
		// 			<Route path="todo-list" element={<TodoList />} />
		// 			<Route path="note-pad" element={<NotePad />} />
		// 			<Route path="note-pad" element={<NotePad />} />
		// 			<Route path="products" element={<Products />} />
		// 			<Route path="products/:id" element={<ShowProducts />} />
		// 		</Route>
		// 	</Routes>
		// </BrowserRouter>
	);
};
