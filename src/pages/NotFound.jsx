import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center'>
        <h1 className='text-4xl font-bold text-red-500'>404</h1>
        <p className="text-lg font-medium my-2">Oops! The page you're looking for does not exist.</p>
        <NavLink to="/" className="btn btn-info">Go back Home</NavLink>
    </div>
  )
}

export default NotFound