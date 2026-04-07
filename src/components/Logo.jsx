import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

function Logo() {

  const { theme, setTheme } = useContext(ThemeDataContext);

  return (
    <div className='relative'>
      <h2 className='text-center font-bold text-3xl md:text-6xl text-cyan-200 p-2 text-shadow-lg text-shadow-amber-800 dark:text-red-800'>Tic Tac Task</h2>
      <button className='absolute top-2.5 right-2 md:top-7 md:right-10 bg-cyan-700 text-white p-1 md:p-2 rounded-full hover:bg-cyan-600' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  )
}

export default Logo
