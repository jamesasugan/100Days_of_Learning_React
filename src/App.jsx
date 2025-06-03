import './App.css'

function App() {
  const name = "James Asugan";
  const programmingLanguage = "JavaScript";
  return (
    
    <>
      <div className='bg-gray-500 w-full h-screen flex flex-col items-center justify-center text-2xl'>
        <h1>Hi, {name}</h1>
        <p>I love coding in {programmingLanguage}</p>
        <p>{programmingLanguage === 'JavaScript' ? "That's a great choice!" : `Nice! ${programmingLanguage} is cool too.`}</p>
      </div>
    </>
  )
}

export default App
