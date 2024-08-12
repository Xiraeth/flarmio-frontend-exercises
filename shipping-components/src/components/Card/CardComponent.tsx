import StyledCard from "./CardComponent.styles";

export interface CardProps {
  hasBorderRadius?: boolean;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  shadow?: string;
  statusColor?: string;
  statusSize?: number;
  tooltip?: string;
  children?: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({
  hasBorderRadius,
  className,
  disabled,
  onClick,
  shadow,
  statusColor,
  statusSize = 40,
  tooltip,
  children,
}) => {
  return <StyledCard>{children}</StyledCard>;
};

export default CardComponent;
