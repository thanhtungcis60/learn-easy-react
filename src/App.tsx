import { useState } from 'react';
import './App.css';
import { Footer, Header, Widget } from './components/common';
import { StudentCard } from './features/labs/StudentCard';
import type { Student } from './models/student';
import { MyText } from './features/labs/MyText';
import { MainLayout } from './components/Layout';
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

  function handleStudentClick(student: Student) {
    console.log('student click');
  }

  return (
    <>
      <MainLayout>
        <StudentCard student={john} onClick={handleStudentClick} />
      </MainLayout>

      <MyText></MyText>
      <MyText>Easy Frontend</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>
      <MyText>
        <span>easy</span>
      </MyText>
      <MyText>
        <span>easy</span> fontend
      </MyText>
      <MyText>
        <span>easy</span> <span>fontend</span>
      </MyText>

      <div>
        <div>
          <Widget title='Earning Overview'>Chart 1</Widget>
        </div>
        <div>
          <Widget title='Revenue Sources'>Chart 2</Widget>
        </div>
        
        <div>
          <Widget title='Earning Overview'>Chart 3</Widget>
        </div>
        <div>
          <Widget title='Earning Overview'>Chart 4</Widget>
        </div>
      </div>
    </>
  );
}

export default App;
