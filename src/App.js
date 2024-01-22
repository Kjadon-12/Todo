import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TaskEdit from './TaskEdit'
import './style.css';

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [edit , setEdit] = useState(false)
  const [taskEditValue , setEditValue] = useState("");
  const [indexEdit , setIdexEdit] = useState(null)
  
  const taskDelete = (idx) => {
    console.log(idx);
    let arr = [...taskList];
    arr.splice(idx, 1);
    setTaskList(arr);
  };
  const taskUpdate=(e)=>{
    e.preventDefault()
     const arr = [...taskList];
     arr[indexEdit] = taskEditValue;
     setTaskList([...arr])
  }
  const taskEdit = (task, idx) => {
     setEditValue(task) 
     setEdit(true)
     setIdexEdit(idx)
    // setTask(task);
  };
  return (
    <>
      <div>
        {edit ? <TaskEdit taskUpdate={taskUpdate} taskEditValue={taskEditValue} setEditValue={setEditValue} setEdit={setEdit}/> : <TodoInput setTaskList={setTaskList} taskList={taskList}/> }
        
        <button onClick={() => setTaskList([])}>Remove All Tasks</button>

        <h3>Your To Do Task</h3>
        <TodoList taskList={taskList} taskDelete={taskDelete} taskEdit={taskEdit}/>
      </div>
    </>
  );
}
