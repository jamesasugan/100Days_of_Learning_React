import { useState } from "react"

const ToggleBox = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
        <section className="w-full h-screen flex justify-center items-center">
            <div className={"bg-gray-200 flex flex-col w-[350px] p-5 h-[20%]"}>
                <button className={`text-lg font-medium cursor-pointer text-white rounded-sm p-2 transition duration-75 ${isVisible ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"}`} onClick={() => setIsVisible(prev => !prev)}>
                    {isVisible ? 'Hide Message' : 'Show Message'}
                </button>

                {isVisible && <p className="mt-14 text-xl font-medium text-center">You toggled me!</p>}
            </div>
        </section>
           
        </> 
    )
}
export default ToggleBox