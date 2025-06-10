import './App.css'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Profile from './components/Profile.jsx';

function App() {
  const name = "James Asugan";
  const programmingLanguage = "JavaScript";
  return (
    
    <>
      <div className='min-h-screen flex flex-col bg-gray-100 text-gray-800'>
        <Header />
        <main className='flex-grow flex'>
          <Profile name="James" age="22" hobby="Coding and playing Games" />
        </main>
       
        <Footer />
      </div>
    </>
  )
}

export default App
