import React, { ComponentProps } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 2px;
  border: 1px solid gray;
  transition: all 0.3s ease;

  &:focus {
    border: 1px solid black;
  }
`;

export interface DefaultInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: ComponentProps<HTMLInputElement>["type"];
  id: string;
}

const SearchInput: React.FC<DefaultInput> = ({
  onChange,
  placeholder,
  type,
  id,
}) => {
  return (
    <StyledInput
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      id={id}
    />
  );
};

export default SearchInput;
