const Notifivcation = ({notice, notices}) => {
  return <div>
    <div className="flex bg-blue-400 text-white px-4 py-2 rounded-lg shadow-lg">
        <button onClick={()=>notices('')} className="mr-2 font-bold hover:text-gray-200 transition">X</button>
        {notice}
    </div>
  </div>
}

export default Notifivcation