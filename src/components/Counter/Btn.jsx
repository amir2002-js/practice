
export default function Btn({ className , children , click}) {
  return (
    <button className={`rounded-lg bg-white hover:bg-slate-400 w-32 h-10 flex justify-center items-center ${className}`} 
    onClick={() => click()}>
        {children}
    </button>
  )
}
