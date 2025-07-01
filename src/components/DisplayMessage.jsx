const DisplayMessage = ({name}) => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
        <div className="bg-gray-300 p-5 rounded">
            <h1>Hello, {name || "Stranger"} </h1>
        </div>
    </section>
  )
}

export default DisplayMessage