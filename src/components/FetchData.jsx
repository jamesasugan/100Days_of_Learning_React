import { useEffect, useState } from 'react'

const FetchData = () => {
    
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if(!res.ok){
                throw new Error("Unable to fetch users!");
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
        });
    }, []);


    return (
        <div className='flex items-start w-full mt-10'>
        {loading && <p>Loading users...</p>}   
        {error && <p>Error: {error}</p>}
        <h1 className='font-bold text-xl text-center mb-10'>Users List:</h1>
        {!loading && !error && (
            <ul className='list-disc mt-10'>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        )}

        </div>
    )
}

export default FetchData