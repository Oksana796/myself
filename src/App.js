
import { useState } from 'react';
import './App.css';

function App() {
  const [newTask, setNewTask] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange =(event) => {
    setNewTask(event.target.value)
  }

  const addTask =()=>{
    setTodoList([...todoList, newTask])
  }
  return (
    <div className="App">
   <div className="addTask">
    <input type="text" onChange={handleChange} />
    <button onClick={addTask}>Add task</button>
   </div>
   <div className="list">
    {todoList.map(task=><h3>{task}</h3>)}
   </div>
    </div>
  );
}

export default App;
