import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) =>
        theme === 'dark'
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(255, 255, 255, 0.9)'
    };
  border: 2px solid ${({ theme }) =>
        theme === 'dark' ? '#495057' : '#dee2e6'
    };
  border-radius: 25px;
  padding: 12px 20px;
  margin: 20px auto;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus-within {
    border-color: #ff6b6b;
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.2);
    transform: translateY(-2px);
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  color: ${({ theme }) =>
        theme === 'dark' ? '#ecf0f1' : '#343a40'
    };
  font-size: 1rem;
  font-weight: 500;

  &::placeholder {
    color: ${({ theme }) =>
        theme === 'dark' ? '#bdc3c7' : '#6c757d'
    };
  }

  &:focus {
    &::placeholder {
      opacity: 0.7;
    }
  }
`;

export const SearchIcon = styled.span`
  font-size: 1.2rem;
  margin-right: 10px;
  color: ${({ theme }) =>
        theme === 'dark' ? '#bdc3c7' : '#6c757d'
    };
  transition: color 0.3s ease;

  ${SearchContainer}:focus-within & {
    color: #ff6b6b;
  }
`;