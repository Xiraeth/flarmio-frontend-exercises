import React from "react";

import styled from "styled-components";

const StyledPageHeader = styled.h3`
  color: dodgerblue;
`;
interface PageHeaderProps {
  children: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ children }) => {
  return <StyledPageHeader> {children} </StyledPageHeader>;
};

export default PageHeader;
