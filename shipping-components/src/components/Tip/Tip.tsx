import { TipWrapper } from "./Tip.styles";

export interface TipProps {
  className?: string;
  theme?: string;
  icon?: string;
  iconColor?: string;
  message?: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  shadow?: string;
  size?: string;
  text?: string;
  tooltip?: string;
  totalOffers?: number;
  hasNewMessage?: boolean;
}

const TipComponent: React.FC<TipProps> = ({
  className,
  theme = "light",
  icon,
  iconColor,
  message = 0,
  onClick,
  shadow = false,
  size = "sm",
  text,
  tooltip,
  totalOffers,
  hasNewMessage,
}) => {
  return (
    <TipWrapper>
      {hasNewMessage && (
        <IconWrapper>
          <i className="fa-regular fa-envelope">
            <i className="fa-solid fa-circle"></i>
          </i>
        </IconWrapper>
      )}
      <IconWrapper>
        <i className="fa-solid fa-suitcase"></i>
      </IconWrapper>
      {totalOffers ? <IconWrapper>{totalOffers}</IconWrapper> : ""}
    </TipWrapper>
  );
};

export default TipComponent;
