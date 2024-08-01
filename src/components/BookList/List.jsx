export default function List({ data }) {
	return (
		<div className="pb-10">
			<div className="p-5 text-[#EEEEEE] container max-w-maxWidth  mt-16 grid items-center border-t-2 border-b-2 border-slate-500grid grid-cols-3 *:w-full justify-items-center justify-center text-center border-slate-500">
				<p>title</p>
				<p>author</p>
				<p>year</p>
			</div>

			{/* for show a list of books we use data (arays of object) that (each index) have id , title , author and year */}
			{data.map((list) => (
				<div className="p-5 text-[#EEEEEE] container max-w-maxWidth grid grid-cols-3 *:w-full justify-items-center justify-center text-center items-center border-t-2 border-slate-500" key={list.id}>
                    <p>{list.title}</p>
                    <p>{list.author}</p>
                    <p>{list.year}</p>
                </div>
			))}
		</div>
	);
}
