import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[20%]'>
                <p className='text-lg font-semibold'>Count: <span className='ml-1 '>{count}</span></p>
                <div className='flex flex-col p-0'>
                    <button onClick={() => setCount(count + 1)} className='p-3 text-white bg-green-500 text-lg font-semibold rounded-lg mt-5 hover:bg-green-600 transition duration-150 cursor-pointer'>Count Up</button>
                    <button onClick={() => {
                        if(count > 0){
                            setCount(count - 1);
                            setMessage('');
                        }else{
                            setMessage("Oops, you have reached the limit.");
                            setTimeout(() => {
                                setMessage("");
                            }, (2000));
                        }
                    }}
                    className='p-3 text-white bg-red-500 text-lg font-semibold rounded-lg mt-5 hover:bg-red-600 transition duration-150 cursor-pointer'>Count Down</button>

                    <button onClick={() => setCount(0)} className='p-3 text-white bg-gray-500 text-lg font-semibold rounded-lg mt-5 hover:bg-gray-600 transition duration-150 cursor-pointer'>Clear</button>

                    <p className='text-lg mt-5'>{message}</p>   
                </div>
            </div>
        </div>
    )
}

export default Counter