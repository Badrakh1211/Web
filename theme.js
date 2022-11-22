
import { createContext, useState } from "react"


export const ColorModeContext = createContext()

export const Theme = ({ children }) => {
    const [darkMode, setDarkMode] = useState(0);

    const ToggleSwitch = () => {
        setDarkMode(!darkMode)
    }
    return (
        <ColorModeContext.Provider value={{ darkMode, ToggleSwitch }}>
            {children}
        </ColorModeContext.Provider>
    )
}