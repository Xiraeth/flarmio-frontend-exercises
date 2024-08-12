import {
  ServiceRequestWrapper,
  CategoryWrapper,
  DisplayFlexDiv,
  StatusDiv,
} from "./ServiceRequestExcerptCompany.styles";
import TipComponent from "../Tip/Tip";

export interface ServiceRequestProps {
  arrival?: string;
  className?: string;
  departure?: string;
  equipments?: string;
  hasNewMessage?: boolean;
  hasNotification?: boolean;
  shipName?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  port?: string;
  status?: "Offers Received" | "No Offers" | "Completed";
  totalOffers?: number;
  travellingSuppliersAllowed?: string;
  uniqueId?: string;
  children?: React.ReactNode;
}

const ServiceRequestComponent: React.FC<ServiceRequestProps> = ({
  arrival,
  className,
  departure,
  equipments,
  hasNewMessage,
  hasNotification,
  shipName,
  onClick,
  port,
  status,
  totalOffers,
  travellingSuppliersAllowed,
  uniqueId,
}) => {
  return (
    <ServiceRequestWrapper status={status}>
      <CategoryWrapper>
        <DisplayFlexDiv>
          <i className="fa-solid fa-gear"></i>
          <span>{equipments}</span>
        </DisplayFlexDiv>
        <DisplayFlexDiv>
          <i className="fa-solid fa-ship"></i>
          <span>{shipName}</span>
        </DisplayFlexDiv>
      </CategoryWrapper>
      <CategoryWrapper>
        <DisplayFlexDiv>
          <i className="fa-solid fa-key"></i>
          <span>{uniqueId}</span>
        </DisplayFlexDiv>
        <DisplayFlexDiv>
          <i className="fa-solid fa-anchor"></i>
          <span>
            {arrival} - {departure} | {port}
          </span>
        </DisplayFlexDiv>
      </CategoryWrapper>{" "}
      <CategoryWrapper>
        <StatusDiv>{status}</StatusDiv>
        <TipComponent
          hasNewMessage={hasNewMessage}
          totalOffers={totalOffers}
        ></TipComponent>
      </CategoryWrapper>
    </ServiceRequestWrapper>
  );
};

export default ServiceRequestComponent;
