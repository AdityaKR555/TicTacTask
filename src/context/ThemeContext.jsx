import React, { createContext, useEffect, useState } from 'react'

export const ThemeDataContext = createContext();

function ThemeContext(props) {

    const [theme, setTheme] = useState('light');
    useEffect(() => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div>
      <ThemeDataContext.Provider value={{ theme, setTheme }}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
