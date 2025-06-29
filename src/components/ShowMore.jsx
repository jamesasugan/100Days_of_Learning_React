import { useState } from "react"

const ShowMore = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <>
        <section className="w-full h-screen flex justify-center items-center">
            <div className="bg-gray-300 p-5 w-[350px] flex h-[350px] flex-col">
                <p className="text-center text-lg">This is the short preview...</p>
                {showMore && <p className="text-center text-lg">Here's the rest of the story!</p>}
                <button onClick={() => setShowMore(prev => !prev)} className={`mt-14 ${showMore ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'}  border-none p-2 rounded-sm font-medium text-lg cursor-pointer  transition duration-75 text-white`}>{showMore ? 'Show Less' : 'Show More'}</button>
            </div>
        </section>
        </>
    )
}

export default ShowMore