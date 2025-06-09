const Header = () => {
  return (
    <div className="w-full bg-gray-500 text-white p-4 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold">James Asugan</h1>
            <div className="flex space-x-4">    
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-lg hover:bg-gray-300 p-1 rounded-[2px] hover:text-gray-600 transition duration-150">Home</a></li>
                    <li><a href="#" className="text-lg hover:bg-gray-300 p-1 rounded-[2px] hover:text-gray-600 transition duration-150">About</a></li>
                    <li><a href="#" className="text-lg hover:bg-gray-300 p-1 rounded-[2px] hover:text-gray-600 transition duration-150">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header