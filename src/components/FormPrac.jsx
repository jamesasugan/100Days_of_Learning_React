import { useState } from "react"

const FormPrac = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
    const [message, setMessage] = useState("");

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData(prev =>({
            ...prev,
            [name]: value.trimStart()
        }));
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();


        console.log("Submitted Data: ", formData);

        setMessage("Form Submitted Successfully!")
        setTimeout(() => setMessage(""), 3000);


        setFormData({
            name: "",
            email: "",
            message:""
        })
    }

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.message.trim().length >= 10;
    

    return (
        <section className="w-full h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-[350px] bg-gray-300 p-3 rounded flex flex-col h-[350px] space-y-1">
                <label htmlFor="name">Write your name:</label>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="bg-white text-black p-1" />
                <label htmlFor="email" className="mt-2">Write your email:</label>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="bg-white text-black p-1" />
                <label htmlFor="message">Write your message:</label>
                <textarea name="message" rows="5" className="bg-white text-black p-1" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
                {message && <p className="text-green-500 text-bold text-lg mt-1">{message}</p>}
                <button type="submit" disabled={!isFormValid} className={`bg-green-500 mt-2 rounded text-white text-[17px] p-1 font-medium hover:bg-green-600 transition duration-75 cursor-pointer ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}>Submit</button>
            </form>
        </section>
    )
}

export default FormPrac