import { Link } from "react-router-dom"

const Users = () => {
    const users = [
        {id: 1, name: "James"},
        {id: 2, name: "Sam"},
        {id: 3, name: "Starlet"},
    ]
    return (
        <div className='p-6'>
            <h1 className='font-bold text-2xl mb-2'>Users</h1>
            <ul className='space-y-2'>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`} className="text-blue-500">{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users