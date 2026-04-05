import React from 'react'
import { useOutletContext } from 'react-router-dom'

function CompletedTasks() {
    
  const { tasks, toggleTask } = useOutletContext();
  const completedTasks = tasks.filter( task => task.completed );

  return (
     <div>

      {completedTasks.length ? (
        completedTasks.map(task => (
          <div key={task.id} className="bg-cyan-900 px-4 py-3 rounded-lg 
              flex gap-4 items-center mt-6 w-[80%] mx-auto
              shadow-md shadow-black/30 
              hover:shadow-lg hover:scale-[1.02] transition-all duration-200">

            <input
              type="checkbox"
              checked={true}
              onChange={() => toggleTask(task.id)}
              className="w-5 h-5 accent-cyan-500 cursor-pointer"
            />

            <p className="line-through text-sm md:text-xl font-semibold text-white">
              {task.content}
            </p>

          </div>
        ))
      ) : (
        <p className="text-cyan-400 text-center mt-5 md:text-lg">No Completed Tasks</p>
      )}

    </div>
  )
}

export default CompletedTasks
