const Profile = (props) => {
  return (
    <div className='w-full flex flex-col items-center justify-center bg-gray-300'>
        <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg text-lg'>
            <h2>Hi, my name is {props.name}</h2>
            <p>I am {props.age} years old.</p>
            <p>My hobby is {props.hobby}</p>
        </div>
    </div>
  )
}

export default Profile