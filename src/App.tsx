import './App.css';

function App() {
  const studentList = [
    {id:1,name:'easy'},
    {id:5,name:'fontend'}
  ];

  const statusList = ['pending','active']

  return (
    <>
      <ul>
        {studentList.map((student)=>(
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
      <ul>
        {statusList.map((status,idx)=>(
          <li key={idx}>{status}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
