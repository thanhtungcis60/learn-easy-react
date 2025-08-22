import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer, Header } from './components/common';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <Footer/>
    </>
  )
}

export default App
