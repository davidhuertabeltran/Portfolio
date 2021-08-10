import React from 'react'; 
import { BiMoon, BiSun } from 'react-icons/bi'

export const ToggleTheme = ( { theme, toggleTheme }) => {
    return (
        <div onClick={toggleTheme}>
            { theme === 'light' ? <BiMoon /> : <BiSun />}
        </div>
    )
}