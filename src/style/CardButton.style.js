import styled from "styled-components";

const CardButton = styled.button`
  margin: 10px;
  padding: 12px 20px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  font-size: large;
  border: none;
  transition: color 0.4s linear;
  position: relative;

  &:hover {
    background-color: #a3b18a;
    color: #fefae0;
  }
`;

export default CardButton;
