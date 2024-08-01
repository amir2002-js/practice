import Btn from "./Btn";


export default function Show({ product , number , price , imgUrl , index , data , setShoeses}) {
    function onClickHandler(){
		const newData = [...data];
		newData[index].count -= 1;

		setShoeses(newData)
    }
  return (
    <div className={`${index % 2 != 0 ? "bg-slate-200" : "bg-white"} grid grid-cols-5 gap-4 border-t border-slate-400 justify-items-center justify-around items-center`}>
        
        <img src={imgUrl} className="w-20"/>
        <p>{product}</p>
        <p>{number}</p>
        <p>{price * number}</p>
        <Btn click={() => onClickHandler()}>
            remove
        </Btn>

    </div>
  )
}
