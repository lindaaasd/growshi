import styled from "styled-components";

const CardTitle = styled.h2`
  font-size: ${(props) => props.fontSize};
  padding-top: none;
  margin: ${(props) => props.margin};
  text-transform: uppercase;
`;

export default CardTitle;
