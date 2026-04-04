import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center items-center md:gap-5 gap-2 text-2xl font-bold text-gray-700 mt-5 px-2'>
      <div className='bg-cyan-900 text-cyan-100 py-1 md:py-2 rounded-lg w-[48%] text-center flex justify-center items-center [clip-path:polygon(0_0,100%_0,100%_100%,15%_100%)] transition-all duration-300 hover:bg-cyan-600 hover:text-cyan-950 md:pl-36'>
        <NavLink to="/" className={({isActive}) => `text-sm md:text-3xl transition-all duration-300 w-full ${isActive ? 'text-amber-600' : 'text-cyan-100'}`}>TASK MANAGER</NavLink>
      </div>
      <div className='bg-cyan-900 text-cyan-100 py-1 md:py-2 rounded-lg w-[48%] text-center flex justify-center items-center [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)] transition-all duration-300 hover:bg-cyan-600 hover:text-cyan-950 md:pr-36'>
        <NavLink to="/game" className={({isActive}) => `text-sm md:text-3xl transition-all duration-300 w-full ${isActive ? 'text-amber-600' : 'text-cyan-100'}`}>TIC TAC TOE</NavLink>
      </div>
    </div>
  )
}

export default Navbar