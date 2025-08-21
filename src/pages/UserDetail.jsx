import { NavLink, useParams } from 'react-router-dom'

const UserDetail = () => {
    const { id } = useParams();

    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold'>User Detail</h1>
            <p className='mt-2'>You are viewing details for user ID: {id}</p>
            <NavLink to="/users" className="btn btn-info mt-5">Go back to Users List</NavLink>
        </div>
    )
}

export default UserDetail