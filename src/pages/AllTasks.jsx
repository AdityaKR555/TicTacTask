import React, { useState } from 'react'

function AllTasks() {

    const [content, setContent] = useState("");
    const [tasks, addTasks] = useState([]);

    const addTask = (e) => {
        e.preventDefault();
        if(content.trim() === "") alert("You Cannot Add An Empty Task");
        else{
            addTasks(prev => ([...prev, content]));
        }
        setContent("");
    }

    const deleteTask = (index) => {
        addTasks(prev => prev.filter((_, i) => i != index))
    }

  return (
    <div className="flex flex-col items-center mt-6 px-3">
        {/* input */}
        <form onSubmit={(e) => addTask(e)}>
            <input type="text" value={content} onChange={e => setContent(e.target.value)} placeholder='Add Task here...'
              className="flex-1 bg-cyan-900 text-cyan-100 placeholder-cyan-400 
                 px-4 py-2 rounded-lg outline-none 
                 focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
            />
            <button type='submit' className="bg-cyan-500 hover:bg-cyan-400 text-cyan-950 
          px-5 py-2 rounded-lg font-semibold 
          shadow-md shadow-black/30 transition-all duration-200">Add Task</button>
        </form>

        {/* output */}

        {
            tasks.length > 0 ? (
                <div  className="w-full max-w-xl mt-6 flex flex-col gap-3">
                { 
                    tasks.map((task, i) => (
                        <div key={i} className="bg-cyan-900 text-cyan-100 px-4 py-3 rounded-lg 
              flex justify-between items-center 
              shadow-md shadow-black/30 
              hover:shadow-lg hover:scale-[1.02] transition-all duration-200">
                            <p className="text-sm md:text-base">{task}</p>
                            <button onClick={() => deleteTask(i)}>Delete</button>
                        </div>
                    ))
                }
                </div>
            ) : (
                <p className="text-cyan-400 text-center mt-4">No Tasks Yet</p>
            )
        }
    </div>
  )
}

export default AllTasks
