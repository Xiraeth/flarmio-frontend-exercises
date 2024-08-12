import styled from "styled-components";
import { TipProps } from "./Tip";

export const TipWrapper = styled.div<TipProps>`
  font-size: 1rem;

  display: flex;
  gap: 1.3rem;

  align-self: flex-end;
`;

export const IconWrapper = styled.div`
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  & > i {
    position: relative;
  }

  & > i > i {
    font-size: 0.6rem;
    color: orange;
    position: absolute;
    bottom: 13px;
    right: -10px;
  }
`;
