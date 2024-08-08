import { VscChevronLeft } from "react-icons/vsc";

export default function Cart({ data }) {
	return (
		<div className="flex flex-col gap-4 p-3 rounded bg-white shadow-md font-vazir hover:-translate-y-4 transition-all duration-500">
			<img src={data.img} alt="" className="shadow shadow-black/80 rounded-sm " />
			<div className="flex flex-col justify-between h-24 text-end">
				<h1 className="drop-shadow-lg shadow-black">{data.title}</h1>
				<div className="flex flex-row-reverse justify-between items-center">
					<p>{data.price == 0? "رایگان" : `تومان ${data.price}`}</p>
					<button className="flex gap-3 items-center bg-teal-600 text-white py-0.5 px-4 hover:bg-teal-700 rounded transition-all duration-300">
          <VscChevronLeft />
            خرید
            </button>
				</div>
			</div>
		</div>
	);
}
