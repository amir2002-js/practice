import { useState } from "react";

export default function Questions() {
	const questionOne = useState([
		{
			question: "1 + 1 = ?",
			ansewr: [
				[1, false],
				[3, false],
				[4, false],
				[2, true],
			],
		},
		{
			question: "1 + 1 = ?",
			ansewr: [
				[1, false],
				[2, true],
				[3, false],
				[4, false],
			],
		},
		{
			question: "1 + 1 = ?",
			ansewr: [
				[2, true],
				[1, false],
				[3, false],
				[4, false],
			],
		},
		{
			question: "1 + 1 = ?",
			ansewr: [
				[1, false],
				[3, false],
				[2, true],
				[4, false],
			],
		},
	]);


	return (
		<div className="bg-blue-950 flex justify-center items-center h-[100vh] ">
			<div className="border border-white rounded p-8 bg-white/40 flex justify-center items-start">
				<p>{questionOne[0][0].question}</p>
				
					{questionOne[0][0].ansewr[0].map((ans , i) =>
                    // (
                    //     // <div key={ans[0]} className="flex flex-col">
                    //     //     {/* {ans.map((option , i)=>
                    //     //         {console.log(option);}
                    //     //         // (<button key={i}>{option[0]}</button>)
                    //     //     )} */}
                    //     // </div>
                    // )

                    {console.log(ans);}
                   
                    )}
				
			</div>
		</div>
	);
}
