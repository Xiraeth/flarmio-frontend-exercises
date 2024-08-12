import {
  PendingRatingsWrapper,
  ShipImage,
  RightArrowButton,
  ShipDetailsWrapper,
  ShipDetails,
  CardComponentWrapper,
} from "./PendingRatings.styles";

import React from "react";

export interface PendingRatingsProps {
  className?: {
    class1: string;
    class2: string;
  };
  image?: string;
  supplierName?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  shipName?: string;
}

const PendingRatingsComponent: React.FC<PendingRatingsProps> = ({
  className = { class1: "", class2: "" },
  image,
  supplierName,
  onClick,
  shipName,
}) => {
  return (
    <>
      <CardComponentWrapper onClick={onClick}>
        <PendingRatingsWrapper>
          <ShipImage src={image} alt="Ship" />

          <ShipDetailsWrapper>
            <ShipDetails>
              <i className={className.class1}></i>
              {supplierName}
            </ShipDetails>
            <p>
              <i className={className.class2}></i>
              {shipName}
            </p>
          </ShipDetailsWrapper>
          <RightArrowButton>&#8250;</RightArrowButton>
        </PendingRatingsWrapper>
      </CardComponentWrapper>
    </>
  );
};

export default PendingRatingsComponent;
