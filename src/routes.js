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
import NavBar from "./components/Nav/NavBar";

const routes = [
	{
		path: "/",
		element: <NavBar/> ,
		children:[
			{ path: "counter", element: <Counter /> },
			{ path: "form", element: <Form /> },
			{ path: "question", element: <Questions /> },
			{ path: "book-list", element: <BookList /> },
			{ path: "shop", element: <Shop /> },
			{ path: "todo-list", element: <TodoList /> },
			{ path: "note-pad", element: <NotePad /> },
			{ path: "note-pad", element: <NotePad /> },
			{ path: "products", element: <Products /> },
			{ path: "products/:id", element: <ShowProducts /> },
		],
	},
];

export default routes