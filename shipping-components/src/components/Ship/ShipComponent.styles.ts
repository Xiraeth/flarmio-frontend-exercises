import styled from "styled-components";

import { ShipProps } from "./ShipComponent";
import CardComponent from "../Card/CardComponent";

export const Wrapper = styled(CardComponent);

export const StyledShip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  padding-right: 32px;
  border-radius: 8px;

  & > img {
    width: 120px;
    height: 80px;
  }
`;

export const ShipDetails = styled.div`
  font-size: 1.3rem;
  display: flex;
  gap: 1rem;
`;

export const ShipName = styled.span`
  font-size: 1.4rem;
`;

export const ShipType = styled.span`
  font-size: 1.3rem;
  transform: translateX(39px);
`;

export const ShipDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.2rem;
`;

export const ShipButton = styled.button`
  background: transparent;
  border: none;
  font-size: 4rem;
  cursor: pointer;
  position: relative;
  bottom: 5px;
`;
