import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, Header } from './components/common';
import { Student } from './features/labs/Student';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Student name="3T" age={16} isHero={false} hobbyList={['eat','code','sleep']} sayHello={()=>console.log("Hello World")}/>
      <Footer/>
    </>
  )
}

export default App
