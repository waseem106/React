import { useState } from 'react'


export default function Counter() {
  
    
    console.log("i ran counter")
    let [counter,setCounter]=useState<number>(5)

  
    
    const increase=():void=>{
      console.log("Time before the counter",Date.now())
      
      setCounter(counter+1)
      setCounter(counter+1)
      setCounter(counter+1)
      console.log("counter value",counter,Date.now())

    }

    const decrease=():void=>{
      if(counter!==0)
      {
        setCounter(counter-1)
      }

    }


    return (
    <div className='flex flex-col items-center'>
      <h3 className='text-4xl'>Counter value:{counter} </h3>
      <button className='border-2 p-3 rounded-md bg-blue-500' onClick={increase}>
        Increase Value
      </button>
      <br />
      <button className='border-2 p-3 rounded-md bg-blue-500' onClick={decrease}>
        Decrease Value
      </button>

    </div>
  )
}
