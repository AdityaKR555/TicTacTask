import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center items-center md:gap-5 gap-2 text-2xl font-bold text-gray-700 mt-5 px-2'>
      <div className='bg-cyan-900 text-cyan-100 py-1 md:py-2 rounded-lg w-[48%] text-center flex justify-center items-center [clip-path:polygon(0_0,100%_0,100%_100%,15%_100%)] transition-all duration-300 hover:bg-cyan-600 hover:text-cyan-950 md:pl-36'>
        <Link to="/" className='text-sm md:text-3xl'>TASK MANAGER</Link>
      </div>
      <div className='bg-cyan-900 text-cyan-100 py-1 md:py-2 rounded-lg w-[48%] text-center flex justify-center items-center [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] transition-all duration-300 hover:bg-cyan-600 hover:text-cyan-950 md:pr-36'>
        <Link to="/game" className='text-sm md:text-3xl'>TIC TAC TOE</Link>
      </div>
    </div>
  )
}

export default Navbar
