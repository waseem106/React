import React, { useState } from 'react'

function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
}) {
  return (
    <div>
      
    <ul>
        {todos.map(todo=>(
            <li key={todo.id}>
                <Task
                todo={todo}
                onChange={onChangeTodo}
                onDelete={onDeleteTodo}
                />
            </li>
        ))}
    </ul>
    </div>
  )
}

export default TaskList



function Task({todo,onChange,onDelete}){

const[isEditing,setIsEditing]=useState(false)
let todoContent;

if(isEditing){
  todoContent=(
    <>
   <input
          value={todo.title}
          onChange={e => {
            onChange({
              ...todo,
              title: e.target.value
            });
      }} />

      <button onClick={()=>setIsEditing(false)}>save</button>
      

    </>
  )
}else{
  todoContent=(
    <>
    {todo.title}
    <button onClick={()=>setIsEditing(true)}>Edit</button>
    </>
  )
}

return(

  <label>
  <input
    type="checkbox"
    checked={todo.done}
    onChange={e => {
      onChange({
        ...todo,
        done: e.target.checked
      });
    }}
  />
  {todoContent}
  <button onClick={() => onDelete(todo.id)}>
    Delete
  </button>
</label>


)

}
