import { useState } from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <Navbar />
    </>
  )
}

export default App
