import { useState } from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import { Outlet, Routes, Route } from 'react-router-dom'
import AllTasks from './pages/AllTasks'
import Game from './pages/Game'
import CompletedTasks from './pages/CompletedTasks'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/game" element={<Game   />} />
      </Routes>
    </>
  )
}

export default App
