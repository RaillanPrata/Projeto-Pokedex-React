import { useTheme } from "../../contexts/ThemeContext";

function ThemeToggler() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="btn-theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Tema Claro 🌞' : 'Tema Escuro 🌛'}
        </button>
    );
}

export default ThemeToggler;