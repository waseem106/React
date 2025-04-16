import React, { useState } from 'react'


function Objects() {

    const [form ,setForm]=useState({
        firstName:"Waseem",
        lastName:"Aziz",
        email:"Waseem@gmail.com"
    })

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center '>
    <div className='flex items-center flex-col bg-white rounded-md p-4 h-full'>

    <label className="block text-sm font-medium text-gray-700 mb-1" >First Name</label>
    <input type="text" onChange={e=>(setForm({...form,firstName:e.target.value}))} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"/>

    <label className="block text-sm font-medium text-gray-700 mb-1" >Last Name</label>
    <input type="text" onChange={e=>(setForm({...form,lastName:e.target.value}))} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"/>

    <label className="block text-sm font-medium text-gray-700 mb-1"  >Email</label>
    <input type="email" onChange={e=>(setForm({...form,email:e.target.value}))} className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" />

    <p className="block text-sm font-medium text-gray-700 mb-1">
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
    </p>
    </div>

    </div>




  )
}

export default Objects
