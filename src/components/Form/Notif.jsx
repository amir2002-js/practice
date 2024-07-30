
export default function Notif({className , children}) {
  return (
    <div className={`bg-gray-900 px-5 py-2 text-white absolute ${className} z-50`}>
        {children}
    </div>
  )
}
