import { useEffect, useState } from 'react'

const FetchData = () => {
        
    const Spinner = () => (
        <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    )

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if(!res.ok){
                throw new Error("Connection Failed!")
            }
            return res.json();
        })
        .then(data => {
            setUsers(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        })
    }, [])


    return (
        <div className='flex justify-center items-start w-full mt-10'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-xl'>Users List:</h1>
            
                {loading && (
                    <div className='flex items-center space-x-2'>
                        <Spinner />
                        <span>Loading users...</span>
                    </div>
                )}
                
                {error && <p className='text-red-500 font-bold text-xl'>Error: {error}</p>}

                {!loading && !error && (
                    <ul>
                        {users.map(user => (
                            <li key={user.id}>{user.name}</li>
                        ))}
                    </ul>
                )}
            </div>
            

        </div>
    )
}

export default FetchData