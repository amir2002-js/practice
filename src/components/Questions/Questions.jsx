import { useState } from "react";

export default function Questions() {
	const [questionOne, setQuestionOne] = useState([
		{
			q: "1+2=?",
			a: [
				[1, "3", true],
				[2, "5", false],
				[3, "7", false],
				[4, "9", false],
			],
		},
		{
			q: "2+2=?",
			a: [
				[1, "4", true],
				[2, "6", false],
				[3, "8", false],
				[4, "10", false],
			],
		},
		{
			q: "1+4=?",
			a: [
				[1, "5", true],
				[2, "7", false],
				[3, "9", false],
				[4, "11", false],
			],
		},
		{
			q: "2+4=?",
			a: [
				[1, "6", true],
				[2, "8", false],
				[3, "10", false],
				[4, "12", false],
			],
		},
	]);
	const [num, setNum] = useState(0);
	const [scores, setScores] = useState(0);

	return (
		<div className="bg-blue-950 flex justify-center items-center h-[100vh] ">
			<div className="border border-white rounded w-96 h-72 bg-white/40 flex justify-center items-center">
				<div className="flex flex-col justify-center items-start gap-10">
					<p>
						{num < questionOne.length
							? questionOne[num].q
							: `${scores} / ${questionOne.length} is your score`}
					</p>
					{num < questionOne.length ? (
						<div className="flex gap-10">
							{questionOne[num].a.map((btnA) => (
								<button
									className="bg-violet-600 text-white font-semibold size-8 rounded flex justify-center items-center hover:bg-white/0 hover:ring-4 ring-violet-500 transition-all duration-300"
									key={btnA[0]}
									onClick={() => {
										if (num < questionOne.length) {
											setNum(num + 1);
										}
										if (btnA[2] === true) {
											setScores(scores + 1);
										}
									}}
								>
									{btnA[1]}
								</button>
							))}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
