import Btn from "./Btn";

export default function Card({ shoeses , setShoeses}) {
	function onClickHandler(shoes, i) {
		const oldCount = shoes.count;
		const newData = [...shoeses];
		newData[i].count += 1;

		setShoeses(newData)
	}
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 max-w-maxWidth container justify-items-center gap-y-10 gap-x-3">
			{shoeses.map(
				(shoes, i) => (
					<div
						key={shoes.id}
						className="h-72 max-w-[500px] bg-white shadow-[5px_5px_10px_rgba(0,0,0,0.3)] rounded flex justify-between items-center z-10"
					>
						<div className="z-0 rounded h-full w-4/12 sm:w-7/12 flex justify-center items-center bg-slate-700 rounded-tr-[200px] rounded-br-[56px] shadow-[5px_0_10px_-5px_black]">
							<img src={shoes.url} alt="" />
						</div>
						<div className="flex flex-col justify-around h-full items-center w-8/12 sm:w-5/12 px-4 py-6 text-center">
							<p className="font-semibold">{shoes.name}</p>
							<p className="">{shoes.cap}</p>
							<span>price : {shoes.price}$</span>
							<Btn click={() => onClickHandler(shoes,i)}>
								sell
							</Btn>
						</div>
					</div>
				)
				// {console.log(shoes);}
			)}
		</div>
	);
}
