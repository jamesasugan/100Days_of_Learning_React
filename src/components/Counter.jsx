import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-[20%]'>
                <p className='text-lg font-semibold'>Count: <span className='ml-1 '>{count}</span></p>
                <div className='flex flex-col p-0'>
                    <button onClick={() => setCount(prev => prev + 1)} className='p-3 text-white bg-green-500 text-lg font-semibold rounded-lg mt-5 hover:bg-green-600 transition duration-150 cursor-pointer'>+1</button>
                    <button onClick={() => {
                        if(count > 0){
                            setCount(prev => prev -1);
                            setMessage('');
                        }else{
                            setMessage("Cannot go below 0");
                            setTimeout(() => {
                                setMessage("");
                            }, (2000));
                        }
                    }}
                    className='p-3 text-white bg-red-500 text-lg font-semibold rounded-lg mt-5 hover:bg-red-600 transition duration-150 cursor-pointer'>-1</button>

                     <button onClick={() => setCount(prev => prev + 5)} className='p-3 text-white bg-green-500 text-lg font-semibold rounded-lg mt-5 hover:bg-green-600 transition duration-150 cursor-pointer'>+5</button>

                     <button onClick={() => {
                        setCount(prev => {
                            const newCount = prev * 2;
                            if(newCount > 50){
                                setMessage("Whoa! That's a huge number!");
                                setTimeout(() => {
                                setMessage("");
                            }, (2000));
                            }
                            return newCount;
                        })    
                    }
                        
                     } className='p-3 text-white bg-green-500 text-lg font-semibold rounded-lg mt-5 hover:bg-green-600 transition duration-150 cursor-pointer'>x2</button>

                    <button onClick={() => {
                        if(count >= 5){
                            setCount(prev => prev -5);
                            setMessage('');
                        }else{
                            setMessage("Cannot go below 0");
                            setTimeout(() => {
                                setMessage("");
                            }, (2000));
                        }
                    }}
                    className='p-3 text-white bg-red-500 text-lg font-semibold rounded-lg mt-5 hover:bg-red-600 transition duration-150 cursor-pointer'>-5</button>

                    <button onClick={() => setCount(0)} className='p-3 text-white bg-gray-500 text-lg font-semibold rounded-lg mt-5 hover:bg-gray-600 transition duration-150 cursor-pointer'>Clear</button>

                    <p className='text-lg mt-5'>{message}</p>   
                </div>
            </div>
        </div>
    )
}

export default Counter