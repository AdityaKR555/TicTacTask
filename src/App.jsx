import { useState } from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
