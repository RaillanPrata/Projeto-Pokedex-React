import { createContext, useState, useContext } from "react";
import darkTheme from "../styles/darkTheme";
import lightTheme from "../styles/lightTheme";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    const themeStyles = theme === 'light' ? darkTheme : lightTheme;
    const themeStyle = themeStyles;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeStyles, themeStyle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
