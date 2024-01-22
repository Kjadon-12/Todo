
import React , {useState} from 'react';
const TodoInput = ({setTaskList , taskList})=>{
  const [task, setTask] = useState('');
  const taskAdd = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask('');
  };
  return(
    <>
      <form onSubmit={taskAdd}>
          <input type="text" placeholder="Add You Task" value={task} onChange={(e)=> setTask(e.target.value)}></input>
          <button type="submit">Add Task</button>
        </form>
    </>
  )

}

export default TodoInput;