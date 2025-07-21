import { useEffect, useState } from 'react'

const UseEffectIntro = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log("Count changed: ", count);
    }, [count]);
    
    return (
        <div className='flex flex-col items-center h-screen gap-4 justify-center w-full'>
            <p>Count: {count}</p>
            <button onClick={() => setCount(prev => prev + 1)} className='bg-green-500 text-white p-2 rounded hover:bg-green-600 transition duration-75 cursor-pointer'>Increment</button>
        </div>
    )
}

export default UseEffectIntro