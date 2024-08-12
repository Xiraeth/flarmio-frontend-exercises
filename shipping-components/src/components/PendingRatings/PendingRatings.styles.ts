import styled from "styled-components";
import { PendingRatingsProps } from "./PendingRatings";
import CardComponent from "../Card/CardComponent";

export const CardComponentWrapper = styled(CardComponent);

export const PendingRatingsWrapper = styled.div<PendingRatingsProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShipImage = styled.img`
  width: 160px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  object-fit: contain;
  object-position: center;
`;

export const RightArrowButton = styled.button`
  background: transparent;
  border: none;
  font-size: 4rem;
  cursor: pointer;
  position: relative;
  bottom: 5px;
`;

export const ShipDetailsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.2rem;
`;

export const ShipDetails = styled.div`
  font-size: 1.4rem;
  font-size: 1.3rem;
  display: flex;
  gap: 1rem;
`;
