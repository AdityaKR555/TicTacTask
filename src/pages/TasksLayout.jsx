import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function TasksLayout() {
  return (
    <div className='bg-[#11111154] backdrop-blur-3xl min-h-[79vh] max-w-[94%] md:max-w-[98%] mx-auto my-5 rounded-3xl text-white p-5'>
        <div className="flex gap-4 justify-center md:mt-2">

        <NavLink to="" end className={({isActive}) => `text-sm md:text-xl px-4 py-2 ${isActive ? "rounded-4xl bg-[#ffffff57] backdrop-blur-3xl" : ""}`}>
          All Tasks
        </NavLink>

        <NavLink to="completed" className={({isActive}) => `text-sm md:text-xl px-4 py-2 ${isActive ? "rounded-4xl bg-[#ffffff57] backdrop-blur-3xl" : ""}`}>
          Completed Tasks
        </NavLink>

      </div>
      
      <Outlet />
    </div>
  )
}

export default TasksLayout
