import React from 'react';


const TaskEdit = ({taskUpdate , taskEditValue , setEditValue , setEdit})=>{

  return(
    <>
      <form onSubmit={taskUpdate}>
          <input type="text" 
           value={taskEditValue} onChange={(e)=> setEditValue(e.target.value)}
          >

           </input>
          <button type="submit">Edit Task</button>
        </form>
        <button onClick={()=>setEdit(false)}>Add New Task</button>
    </>
  )
}

export default TaskEdit;