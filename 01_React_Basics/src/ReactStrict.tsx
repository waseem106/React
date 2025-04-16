import { useState } from 'react'

function ReactStrict() {
     // This component function will run twice for every render.
    console.log("I React Strict Method")

    //this will run only  at start for initialization
    const [todos, setTodos] = useState(() => {    
        // This initializer function will run twice during initialization.
        console.log("I am state  function in the react strict(will run only at time of initalzation)")
        console.log('')
        return createTodos();
      });

    function createTodos(){
        console.log("I am firstcreaeTodos")
        return  ["my first todo"]
      }

    function createTodo()
    {
        console.log("i am new todofunction")
        return `New todo ${Date.now()}`
    }

      function handleClick() {
        setTodos(prevTodos => {
          // This updater function will run twice for every click.
          return [...prevTodos, createTodo()];
        });
      }


      function handleRemove(){
        setTodos(prev=>{
            if(prev.length===0)
            return prev
            const updated=[...prev]
            updated.pop()
            return updated
            
        })
      }
  return (
 
    <div className="p-4">
    <h2 className="text-2xl mb-4">📋 Todo List</h2>
    <ul className="mb-4">
      {todos.map((todo, index) => (
        <li key={index}>✅ {todo} 💕</li>
      ))}
    </ul>
    <div className='flex gap-2'>
    <button className="p-2 bg-blue-500 text-white rounded" onClick={handleClick}>
      ➕ Add Todo
    </button>
    
    <button className="p-2 bg-blue-500 text-white rounded" onClick={handleRemove}>
      ➖ Remove Todo
    </button>
    </div>
  </div>
  )
}

export default ReactStrict





