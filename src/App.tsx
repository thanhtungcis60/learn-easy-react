import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Footer, Header } from './components/common';
import { StudentCard } from './features/labs/Student';
import type { Student } from './models/student';
// import Header from './components/common/Header';
// import Footer from './components/common/Footer';

function App() {
  const [count, setCount] = useState(0);
  const john: Student = {
    name: '3T',
    age: 16,
    isHero: false,
    hobbyList: ['eat', 'code', 'sleep'],
  };

  return (
    <>
      <Header />
      <StudentCard student={john} />
      <Footer />
    </>
  );
}

export default App;
