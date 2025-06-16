const Profile = ({name, age, hobby}) => {
  return (
    <section className='w-full flex flex-col items-center justify-center bg-gray-300'>
        <div className='bg-blue-500 text-white p-6 rounded-lg shadow-lg text-lg'>
            <h2>Hi, my name is {name}</h2>
            <p>I am {age} years old.</p>
            <p>{age >= 18 ? 'You are an Adult' : 'You are still a minor.'}</p>
            <p>My Hobbies:</p>
            <ul className="list-disc list-inside mt-2">
              {hobby.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
        </div>
    </section>
  )
}

export default Profile