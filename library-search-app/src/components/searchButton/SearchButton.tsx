import React from "react";
import styled from "styled-components";

const StyledSearchButton = styled.button`
  background-color: rgb(0, 120, 200);
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background-color: dodgerblue;
  }
`;

interface SearchButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SearchButton: React.FC<SearchButtonProps> = ({ children, onClick }) => {
  return (
    <StyledSearchButton onClick={onClick}> {children} </StyledSearchButton>
  );
};

export default SearchButton;
