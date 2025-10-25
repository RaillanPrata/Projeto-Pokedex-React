import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)'
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
`;

export const ThemeToggleContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

export const PokemonCard = styled.div`
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(145deg, #2c3e50, #34495e)'
      : 'linear-gradient(145deg, #f8f9fa, #e9ecef)'
  };
  border-radius: 20px;
  border: 8px solid ${({ theme }) =>
    theme === 'dark' ? '#1a252f' : '#343a40'
  };
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.1);
  padding: 25px;
  max-width: 600px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #ffe66d);
  }

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 3px solid ${({ theme }) =>
    theme === 'dark' ? '#495057' : '#dee2e6'
  };
    border-radius: 15px;
    pointer-events: none;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 3px solid ${({ theme }) =>
    theme === 'dark' ? '#495057' : '#dee2e6'
  };
`;

export const BackButton = styled(Link)`
  background: linear-gradient(145deg, #6c757d, #495057);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #495057, #343a40);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const PokemonNumber = styled.div`
  background: #343a40;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 16px;
  border: 3px solid #6c757d;
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  padding: 20px;
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(145deg, #34495e, #2c3e50)'
      : 'linear-gradient(145deg, #ffffff, #f8f9fa)'
  };
  border-radius: 15px;
  border: 4px solid ${({ theme }) =>
    theme === 'dark' ? '#495057' : '#dee2e6'
  };
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 200px;
    max-height: 200px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    animation: float 3s ease-in-out infinite;
    transition: transform 0.3s ease;

    &:hover {
      animation-play-state: paused;
      transform: scale(1.1) rotate(5deg);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-10px) rotate(1deg);
    }
    50% {
      transform: translateY(-5px) rotate(0deg);
    }
    75% {
      transform: translateY(-15px) rotate(-1deg);
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) =>
    theme === 'dark' ? '#ecf0f1' : '#343a40'
  };
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
`;

export const PokemonInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Section = styled.div`
  background: ${({ theme }) =>
    theme === 'dark'
      ? 'linear-gradient(145deg, #34495e, #2c3e50)'
      : 'linear-gradient(145deg, #ffffff, #f8f9fa)'
  };
  border-radius: 15px;
  padding: 20px;
  border: 3px solid ${({ theme }) =>
    theme === 'dark' ? '#495057' : '#dee2e6'
  };
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h3 {
    margin: 0 0 15px 0;
    color: ${({ theme }) =>
    theme === 'dark' ? '#ecf0f1' : '#343a40'
  };
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid ${({ theme }) =>
    theme === 'dark' ? '#495057' : '#dee2e6'
  };
    padding-bottom: 8px;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
`;

export const StatsSection = styled(Section)`
  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    > div {
      display: flex;
      align-items: center;
      gap: 15px;
      width: 100%;
      
      span:first-child {
        width: 80px;
        font-weight: bold;
        color: ${({ theme }) =>
    theme === 'dark' ? '#bdc3c7' : '#495057'
  };
        font-size: 0.9rem;
        flex-shrink: 0;
      }
      
      span:last-child {
        width: 40px;
        font-weight: bold;
        color: ${({ theme }) =>
    theme === 'dark' ? '#ecf0f1' : '#343a40'
  };
        text-align: right;
        flex-shrink: 0;
      }
    }
  }
`;

export const StatBar = styled.div`
  flex: 1;
  height: 20px;
  background: #e9ecef;
  border-radius: 10px;
  border: 2px solid #dee2e6;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  div {
    height: 100%;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
    border-radius: 8px;
    transition: width 0.8s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const TypeBadge = styled.span`
  background: ${props => props.color};
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }
`;

export const AbilityTag = styled.span`
  background: linear-gradient(145deg, #28a745, #20c997);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const AbilityDescription = styled.span`
  background: linear-gradient(145deg, #28a745, #20c997);
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const MoveTag = styled.span`
  background: linear-gradient(145deg, #6f42c1, #e83e8c);
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;