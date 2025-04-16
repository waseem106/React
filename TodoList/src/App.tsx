import { useState } from 'react'
import AddTodo from './AddTodo'
import TaskList from './TaskList'
let nextId=3

const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];


function App() {

  const[todos,setTodos]=useState(initialTodos)

  function handleAddTodo(title:string){
    setTodos([
      ...todos,
      {
        id:nextId++,
        title:title,
        done:false
      }
    ])
  }

  function handleChangeTodo(todo:any){
    setTodos(todos.map(t=>{
      if(t.id===todo.id){
        return todo
      }else{
        return t;
      }
    }))
  }

  function handleDeleteTodo(todoId:any) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }

  return (
   
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}

export default App
