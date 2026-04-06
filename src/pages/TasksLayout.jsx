import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function TasksLayout() {

  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addTask = (content) => {
    setTasks(prev => [...prev, 
      {
        id: Date.now(),
        content,
        completed: false
      }
    ]);
  }

  const updateTask = (tasks) => {
    setTasks(tasks);
  }

  const toggleTask = (id) => {
    setTasks(prev => prev.map( task => task.id === id ? { ...task, completed: !task.completed} : task));
  }

  useEffect(() => {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    try {
      setTasks(JSON.parse(savedTasks));
    } catch (e) {
      console.error("Invalid JSON in localStorage:", e);
    }
  }
  setIsLoaded(true);
}, []);


useEffect(() => {
  if (!isLoaded) return;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks, isLoaded]);

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
      
      <Outlet context={{tasks, addTask, toggleTask, updateTask}}/>
    </div>
  )
}

export default TasksLayout
