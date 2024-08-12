import React from "react";
import styled from "styled-components";

const StyledDisplayDataTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;

  & > div {
    text-align: start;
    border: 1px solid black;
    padding: 5px;
  }
`;

interface DisplayDataProps {
  children?: React.ReactNode;
}

const DisplayDataTable: React.FC<DisplayDataProps> = ({ children }) => {
  return <StyledDisplayDataTable>{children} </StyledDisplayDataTable>;
};

export default DisplayDataTable;
