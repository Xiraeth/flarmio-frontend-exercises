import React from "react";
import styled from "styled-components";

const StyledFlexDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  margin: 0 auto;
  width: 80%;
`;

interface FlexDivProps {
  children: React.ReactNode;
}

const FlexDiv: React.FC<FlexDivProps> = ({ children }) => {
  return <StyledFlexDiv> {children} </StyledFlexDiv>;
};

export default FlexDiv;
