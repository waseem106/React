import React, { useRef } from 'react'

function Simple() {

    let myInputRef=useRef(null)

    const Handler=()=>{
        const result=myInputRef.current
        console.log(result?.value)
    }

  return (
<div className="flex flex-col items-center gap-4 p-4 bg-blue-100 rounded-lg shadow-md w-fit mx-auto mt-10">
  <input
    type="text"
    ref={myInputRef}
    className="border-2 border-blue-600 rounded px-4 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Enter text here"
  />
  <button
    onClick={Handler}
    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
  >
    Click Me
  </button>
</div>

  )
}

export default Simple
