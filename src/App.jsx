import './App.css'
import Card from './components/Card.jsx';
import Counter from './components/Counter.jsx';
import FetchData from './components/FetchData.jsx';
import Footer from './components/Footer.jsx';
import FormPrac from './components/FormPrac.jsx';
import Header from './components/Header.jsx';
import InputName from './components/InputName.jsx';
import NameInput from './components/NameInput.jsx';
import NewForm from './components/newForm.jsx';
import Profile from './components/Profile.jsx';
import ShowMore from './components/ShowMore.jsx';
import ToDo from './components/ToDo.jsx';
import ToggleBox from './components/ToggleBox.jsx';
import ToggleButton from './components/ToggleButton.jsx';
import UseEffectIntro from './components/UseEffectIntro.jsx';
import UserInfo from './components/UserInfo.jsx';

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
           {/* <NewForm /> */}
           {/* <ToggleBox /> */}
           {/* <ShowMore /> */}
           {/* <UserInfo /> */}
           {/* <FormPrac /> */}
           {/* <ToDo /> */}
           {/* <UseEffectIntro /> */}
           {/* <FetchData /> */}
           {/* <Card /> */}
           <ToggleButton />
        </main>
        <Footer />
       
      </div>
    </>
  )
}

export default App
