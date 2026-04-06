import React, { useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";

function AllTasks() {
  const [content, setContent] = useState("");
  // const [tasks, addTasks] = useState([]);
  const { tasks, addTask, toggleTask, updateTask } = useOutletContext();
  const [editId, setEditId] = useState(null);
  const editRef = useRef(null);

  const [btnContent, setBtnContent] = useState("Add Task");

  const HandleAddTask = (e) => {
    e.preventDefault();
    if (!content.trim()) alert("You Cannot Add An Empty Task");

    else if (editId) {
      const updatedTasks = tasks.map( task => task.id === editId ? { ...task, content} : task);
      updateTask(updatedTasks);
      setBtnContent("Add Task");
      setEditId(null);
    }

    else {
      addTask(content);
    }
    setContent("");
  };

  const HandleDeleteTask = (id) => {
      const updatedTasks = tasks.filter( task => task.id !== id );
      updateTask(updatedTasks);
  }

  const EditTask = (id) => {
    const currentTask = tasks.find( task => task.id == id);
    setContent(currentTask.content);
    editRef.current.focus();
    setBtnContent("Save Changes");
    setEditId(id);
  };


  return (
    <div className="flex flex-col items-center mt-6 px-3 ">
      {/* input */}
      <form onSubmit={(e) => HandleAddTask(e)} className="flex gap-4 w-[80%]">
        <input
          ref={editRef}
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add Task here..."
          className="flex-1 bg-cyan-900 placeholder-cyan-400 
                 p-4 rounded-xl outline-none md:text-lg text-cyan-400 font-bold 
                 focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
        />
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 text-cyan-950 
          p-4 md:text-lg rounded-xl font-bold 
          shadow-md shadow-black/30 transition-all duration-200"
        >
          {btnContent}
        </button>
      </form>

      {/* output */}

      {tasks.length > 0 ? (
        <div className="w-[80%] mt-6 flex flex-col gap-3">
          <p className="text-white text-center md:text-lg">Tasks:</p>
          {tasks.map((task, i) => (
            <div
              key={task.id}
              className="bg-cyan-900 text-cyan-100 px-4 py-3 rounded-lg 
              flex justify-between items-center
              shadow-md shadow-black/30 
              hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              <div className="flex gap-2 md:gap-4 items-center justify-center">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-cyan-500 cursor-pointer"
                  onChange={() => toggleTask(task.id)}
                  checked={task.completed}
                />
                <p className={task.completed ? "text-sm md:text-xl font-semibold line-through" : "text-sm md:text-xl font-semibold"}>
                  {task.content}
                </p>
              </div>
              <div className="flex gap-2 md:gap-4 items-center justify-center">
                <button
                className="bg-cyan-700 text-white font-semibold py-1.5 px-3 rounded-xl hover:bg-cyan-500"
                onClick={() => EditTask(task.id)}
                >
                  Edit
                </button>

                <button
                  onClick={() => HandleDeleteTask(task.id)}
                  className="bg-red-700 text-white font-semibold py-1.5 px-3 rounded-xl hover:bg-red-500"
                  >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-cyan-400 text-center mt-5 md:text-lg">
          No Tasks Yet
        </p>
      )}
    </div>
  );
}

export default AllTasks;
