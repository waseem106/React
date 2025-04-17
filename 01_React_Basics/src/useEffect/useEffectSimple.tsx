import React, { useEffect, useState } from 'react'

function UseEffectSimple() {

const[count,setCount]=useState(0)
const[test,setTest]=useState(0)

console.log(test)
useEffect(()=>{
    console.log("dependencie useEffect runs ")
},[count])   //it will run only at first initial render and than after change of dependcie change

const result=useEffect(()=>{
console.log("empty dependencie useEffect runs ")
},[])      //it will run only one time at the inital render

useEffect(()=>{
    console.log(result)
    console.log("useEffect with no dependency array")
})


  return (
    <div>
      <h3>hi it is useEffect Learning</h3>
      <h2>Count: {count}</h2>
      <button onClick={()=>(setCount((prev)=>prev+1))}className='border p-2' >increase</button>
      <button onClick={()=>(setCount((prev)=>prev-1))}className='border p-2'  >decrease</button>
      <button onClick={()=>(setTest((prev)=>prev-1))} className='border p-2'>Test useEffect</button>
    </div>
  )
}


export default UseEffectSimple
