import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px;
  width: 150px;
  padding: 20px;
  margin: 30px 0;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  display: block;
  pointer-events: auto;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0,0,0,0.12);
  }

  img {
    width: 110px;
    height: 110px;
    object-fit: contain;
    display: block;
    margin: 0 auto 8px auto;
    pointer-events: none;
  }

  h3 {
    margin: 6px 0 4px 0;
    font-size: 1rem;
    text-transform: capitalize;
  }

  span {
  text-transform: capitalize;
    padding: 2px 5px;
    margin: 2px 0;
    font-size: 12px;
    border-radius: 1rem;
    filter: brightness(1.1);
    text-align: center;
  }
`;