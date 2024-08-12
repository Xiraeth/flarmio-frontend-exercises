import styled from "styled-components";
import { CardProps } from "./CardComponent";

const StyledCard = styled.div<CardProps>`
  width: 100%;
  margin: 0 auto;

  background: white;
  // border-radius: ${(props) => (props.hasBorderRadius ? "8px" : "none")};
  border-radius: 8px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  box-shadow: 1px 3px 10px 6px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  // overflow: hidden;

  margin-bottom: 2rem;

  transition: all 0.1s ease;

  & > button {
    background: transparent;
    border: none;
    font-size: 4rem;
    cursor: pointer;
    position: relative;
    bottom: 5px;
  }
`;

export default StyledCard;
