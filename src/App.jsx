import './App.css'
import Counter from './components/Counter.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import NameInput from './components/NameInput.jsx';
import NewForm from './components/newForm.jsx';
import Profile from './components/Profile.jsx';

function App() {
  const name = "James Asugan";
  const programmingLanguage = "JavaScript";
  return (
    
    <>
      <div className='min-h-screen flex flex-col bg-gray-100 text-gray-800'>
        <Header />
        <main className='flex-grow flex'>
          {/* <Profile 
          name="James" 
          age={22} 
          hobby={['Gaming', 'Coding', 'Cycling & Running']} /> */}
           {/* <Counter /> */}
           {/* <NameInput /> */}
           <NewForm />
        </main>
        <Footer />
       
      </div>
    </>
  )
}

export default App
