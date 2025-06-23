import { useState } from 'react'

const NameInput = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const handleInputChange = (e) =>{
        const value = e.target.value;

        if(value.length > 20){
            setMessage("Name is too long!");
            setTimeout(() => setMessage(""), 4000);
            return;
        }

        setName(value);
    }

    return (
        <section className="w-full h-screen flex justify-center items-center">
            <div className="bg-gray-200 p-5 rounded">
                <input type="text" value={name} onChange={handleInputChange} className='bg-slate-500 p-3 border-none text-white' placeholder='Enter your name'/>
                <p className='text-lg mt-2 text-black font-medium'>Hello, {name.trim() || "Stranger"}!</p>
                {message && <p className='mt-2 text-black text-lg font-medium'>{message}</p>}
            </div>
        </section>
    )
}

export default NameInput