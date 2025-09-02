import InputField from "../components/forms/InputField";
import useForm from "../hooks/useForm"
import { loginSchema } from "../assets/utils/validationSchema";

const Login = () => {
    const { values, errors, setErrors, handleChange, resetForm } = useForm({
        username: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await loginSchema.validate(values, { abortEarly: false });
            
            console.log("Username: ", username.value);
            console.log("Password: ", password.value);
            
            resetForm();
        }   catch (validationError){
            if (validationError.inner) {
                const formErrors = validationError.inner.reduce((acc, err) => {
                    acc[err.path] = err.message;
                    return acc;
                }, {});
                setErrors(formErrors)
            }
        }
    };

    return (
        <>
        <div className="p-6 w-[20rem] mx-auto bg-white shadow-lg rounded-2xl mt-10">
            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <InputField 
                    label="Username"
                    name="username"
                    placeholder="Username..."
                    value={values.username}
                    onChange={handleChange}
                    error={errors.username}
                /> 
                <InputField 
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password..."
                    value={values.password}
                    onChange={handleChange}  
                    error={errors.password}        
                />
                <button type="submit" className="btn btn-success w-full mt-3">Login</button>
            </form>
        </div>
        </>
        
    )
}

export default Login
