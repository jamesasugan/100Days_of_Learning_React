import { useState } from 'react';

const NewForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setFormData(prev =>({
            ...prev,
            [name]: value.trimStart()
        }));
    }

    return (
        <section className="w-full h-screen flex justify-center items-center">
                <div className="bg-gray-200 p-5 rounded flex flex-col space-y-4 w-[30%]">
                    <input type="text" name='name' value={formData.name} onChange={handleChange} className='bg-white text-black p-2 rounded-sm' placeholder='Name'/>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} className='bg-white text-black p-2 rounded-sm' placeholder='Email'/>
                    <input type="password" name='password' value={formData.password} onChange={handleChange} className='bg-white text-black p-2 rounded-sm' placeholder='Password'/>
                    <p className='font-medium'>Hello, {formData.name || "Stranger"}</p>
                    <p className='font-medium'>Your email is: {formData.email || "None"}</p>
                    <p className='font-medium'>Your password is: {formData.password || "None"}</p>
                </div>
            </section>
    )
}

export default NewForm