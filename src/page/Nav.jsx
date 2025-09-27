import React, { useState } from 'react'

export default function Nav() {
  const[profile,setProfile]=useState(false)
  return (
    <div className='mx-auto w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 py-4'>
       <nav className='flex justify-between relative' >
        <div className='flex  items-center gap-4'>
        <a href="#"><img src="src\assets\home.png" alt="" className='w-6' /></a>
        <h1 className='text-2xl font-bold hidden md:block lg:block'>To Do</h1>
        </div>
        <div className='flex gap-4 items-center '>
          <img src="src\assets\user.png" className=' block sm:hidden  w-6 h-6' alt="" onClick={()=>(setProfile(!profile))}/>
            {profile&&(
        <div className='absolute top-8  right-2 block sm:hidden px-4 py-4 bg-gray-200 ' >
          <h2 className=' hover:scale-105 cursor-pointer'>Signin</h2>
          <h2>Sign Up</h2>
        </div>
       )}
        <button className='bg-amber-500 px-4  rounded-2xl hover:bg-amber-600 cursor-pointer hover:shadow-2xl transform hover:scale-105 hidden sm:block  '>Sign in</button>
        <button className='bg-green-400 rounded-2xl px-4 hover:bg-green-500 cursor-pointer hover:scale-105 hover:shadow-2xl hidden sm:block'>Sign Up</button>
        </div>
       </nav>
     
       <div className='py-2'>
       <hr />
       </div>
    </div>
  )
}
