const InputName = ({name, setName}) => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
        <div className="bg-gray-300 p-5 w-[350px] h-[100px] rounded flex flex-col space-y-1">
            <label htmlFor="name">Write your name:</label>
            <input type="text" className="bg-white text-black p-1" placeholder="Name" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        </div>
    </section>
  )
}

export default InputName