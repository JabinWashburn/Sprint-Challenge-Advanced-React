import React from 'react'
import { useDarkMode } from '../hooks/darkMode'

export function DarkModeButton(){
    const [darkMode, setDarkMode] = useDarkMode("isDark");
    const toggleMode = e => {
            e.preventDefault();
            setDarkMode(!darkMode);
    };
    return(
        <div>
          <button onClick={toggleMode}>Dark Mode😎</button>  
        </div>
    )
}