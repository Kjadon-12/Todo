import React from 'react'

const TodoList = ({taskList , taskDelete , taskEdit}) => {
  return (
    <>
      {taskList?.map((task, idx) => (
        <div key={idx}>
          <p>{task}</p>
           <button onClick={() => taskEdit(task, idx)}>Edit</button>
          <button onClick={() => taskDelete(idx)}>Delete</button> 
        </div>
      ))}
    </>
  );
};

export default TodoList;
