import { useState } from 'react';
import './App.css';

function App() {
  let i = 0;
  const [showMore,setShowMore]=useState(false);
  const [count,setCount]=useState(0);
  const [name,setName]=useState('3T');

  function handleIncreaseClick(){
    const newCount = count+1;
    setCount(newCount);
    console.log('after setting count',newCount);
    setShowMore((prev)=>!prev);
    i+=5;
  }
  console.log("count:"+count," i:"+i);
  return (
    <>
    <p>Count : {count}</p>
    <button onClick={handleIncreaseClick}>Increase Count</button>
      {showMore && <p>{name}</p>}
    </>
  );
}

export default App;
