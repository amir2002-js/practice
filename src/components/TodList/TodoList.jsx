
export default function TodoList() {
  return (
    <div className="bg-gray-800 min-h-[100vh] flex justify-center items-center gap-4">
        <form action="" className="w-96 rounded outline-none flex justify-between items-center bg-violet-400 focus-visible:ring-4 ring-violet-600 font-medium mt-64">
            <input type="text" className="w-full px-4 rounded py-2 outline-none bg-violet-400" />
            <button>+</button>
        </form>
        <select name="" id="" className="px-4 py-2 rounded outline-none bg-violet-400 focus-visible:ring-4 ring-violet-600 font-medium mt-64">
            <option className="bg-slate-200 " value="all">all</option>
            <option className="bg-slate-100 " value="copmlate">copmlate</option>
            <option className="bg-slate-200 " value="unComplate">unComplate</option>
        </select>
    </div>
  )
}
