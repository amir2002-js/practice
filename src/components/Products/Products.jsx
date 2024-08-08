import { useState } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

export default function Products() {
	const [products, setProducts] = useState([
		{
			id: 1,
			img: "../../src/img/product1.png",
			title: "آموزش جامع و رایگان css grid | همراه با تمرین و پروژه واقعی",
			description:
				"css grid، مهم ترین ابزار طراحان سایت در دنیای مدرن است؛ زیرا در این زمان تکنولوژی بسیار پیشرفت کرده و دسترسی به اینترنت از طریق های مختلف مانند لپ تاپ، تبلت و تلفن همراه امکان پذیر است. از این رو لازم است طراحی وب سایت ها به شکلی قابل انعصاف و کاربرد پسند باشد که ماژول css grid این امکان را برای برنامه نویسان فراهم می کند.",
			price: 0,
		},
		{
			id: 2,
			img: "../../src/img/product2.png",
			title: "آموزش هوش مصنوعی و یادگیری ماشین در بستر دات نت با سی شارپ(ml.net)",
			description:
				"Ml.net یک فریم ورک دات نت منبع باز و cross platform  می باشد این فریم ورک برای پیاده سازی و آموزش مدل های یادگیری ماشین و همچنین برای میزبانی مدل های یادگیری ماشین  در اپلیکیشن های دات نت طراحی شده است. ",
			price: 1000000,
		},
		{
			id: 3,
			img: "../../src/img/product3.png",
			title: "دوره آموزش Next.js | فریمورک قدرتمند React",
			description:
				"Next.js به عنوان یک فریمورک React، باعث می شود که برنامه نویسان فرانت اند، بتوانند با همان زبان جاوا اسکریپت، سمت سرور را هم پیاده سازی کنند و نیازی به برنامه نویس بک اند نداشته باشند. در واقع با یادگیری این فریمورک سریع و قدرتمند و در عین حال ساده، شما به یک برنامه نویس فول استک تبدیل خواهید شد. در دوره آموزش Next.js، با پروژه های عملی و واقعی به خوبی نحوه کار با این فریمورک را فرا خواهید گرفت و با چالش های آن آشنا می شوید.",
			price: 490000,
		},
	]);
	return (
		<div className="bg-slate-200 min-h-[100vh] pt-24">
			<div className="grid grid-cols-3 gap-5 max-w-maxWidth container ">
				{products.map((product) => (
                    <Link key={product.id} to={`${product.id}`} >
					<Cart data={product} />
                    </Link>
				))}
			</div>
		</div>
	);
}
