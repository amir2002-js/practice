import Show from "./Show";

export default function ShopCart({ data, setShoeses }) {
	const x = data.filter((shoes) => {
		return shoes.count > 0;
	});

	return (
		<div className="container max-w-maxWidth">
			<p className="font-extrabold text-white text-3xl text-center pt-16 pb-5">
				SHOPPING CART
			</p>
			<div className="grid grid-cols-5 gap-4 p-5 *:font-bold border-b border-slate-900 bg-white justify-items-center justify-around items-center">
				<p>image of product</p>
				<p>product</p>
				<p>number</p>
				<p>price</p>
				<p>remove</p>
			</div>

			{x.map((shoes, i) => {
				return (
					<Show
						setShoeses={setShoeses}
						data={data}
						index={shoes.id}
						i={i}
						price={shoes.price}
						product={shoes.name}
						imgUrl={shoes.url}
						number={shoes.count}
						key={shoes.id}
					/>
				);
			})}
		</div>
	);
}
