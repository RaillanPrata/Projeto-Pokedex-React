import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
       background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        font-family: 'Josefin Sans', sans-serif;

    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        border: none;
        border-radius: 8px;
        padding: 12px 24px;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        display: inline-flex;
        align-items: center;
        gap: 8px;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        &:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
    }

    .btn-primary {
        background: ${({ theme }) => theme.button.primary};
        color: ${({ theme }) => theme.button.text};
        
        &:hover {
            background: ${({ theme }) => theme.button.primaryHover};
        }
    }

    .btn-secondary {
        background: ${({ theme }) => theme.button.secondary};
        color: ${({ theme }) => theme.button.text};
        
        &:hover {
            background: ${({ theme }) => theme.button.secondaryHover};
        }
    }

    .btn-theme-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        background: ${({ theme }) => theme.button.secondary};
        color: ${({ theme }) => theme.button.text};
        border-radius: 50px;
        padding: 10px 16px;
        font-size: 14px;
        
        &:hover {
            background: ${({ theme }) => theme.button.secondaryHover};
        }
    }

    .btn-load-more {
        background: ${({ theme }) => theme.button.primary};
        color: ${({ theme }) => theme.button.text};
        margin: 80px auto;
        display: block;
        padding: 15px 30px;
        font-size: 18px;
        border-radius: 12px;
        
        &:hover {
            background: ${({ theme }) => theme.button.primaryHover};
        }
    }
`;

export default GlobalStyles;