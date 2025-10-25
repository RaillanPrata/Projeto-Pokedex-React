import './App.css';
import { ThemeProvider } from "styled-components";
import { ThemeContextProvider, useTheme } from "./contexts/ThemeContext";
import GlobalStyles from "./styles/GlobalStyles";
import AppRoutes from "./routes/AppRoutes";

function AppContent() {
    const { themeStyles } = useTheme(); 

    return (
        <ThemeProvider theme={themeStyles}>
            <GlobalStyles />
            <AppRoutes />
        </ThemeProvider>
    );
}

function App() {
    return (
        <ThemeContextProvider>
            <AppContent />
        </ThemeContextProvider>
    );
}

export default App;
