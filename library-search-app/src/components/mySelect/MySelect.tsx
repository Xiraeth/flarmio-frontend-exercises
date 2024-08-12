import React from "react";
import styled from "styled-components";

const StyledMySelect = styled.select`
  margin-top: 1rem;
`;

interface MySelectProps {
  children: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MySelect: React.FC<MySelectProps> = ({ children, onChange }) => {
  return <StyledMySelect onChange={onChange}> {children} </StyledMySelect>;
};

export default MySelect;
