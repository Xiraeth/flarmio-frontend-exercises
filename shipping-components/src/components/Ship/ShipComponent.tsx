import {
  StyledShip,
  Wrapper,
  ShipDetails,
  ShipName,
  ShipDetailsWrapper,
  ShipButton,
  ShipType,
} from "./ShipComponent.styles";

const shipIcon = {
  Pirate: "fa-solid fa-skull",
  Passenger: "fa-solid fa-ship",
  Supplier: "fa-solid fa-ship",
} as const;

export interface ShipProps {
  className?: string;
  image: string;
  type: keyof typeof shipIcon;
  name: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ShipComponent: React.FC<ShipProps> = ({
  className,
  image,
  type,
  name,
  onClick,
}) => {
  return (
    <Wrapper onClick={onClick} hasBorderRadius={true}>
      <StyledShip>
        <img src={image} alt="Ship" />

        <ShipDetailsWrapper>
          <ShipDetails>
            <i className={shipIcon[type]} />
            <ShipName>{name}</ShipName>
          </ShipDetails>

          <ShipType>{type}</ShipType>
        </ShipDetailsWrapper>

        <ShipButton>&#8250;</ShipButton>
      </StyledShip>
    </Wrapper>
  );
};

export default ShipComponent;
