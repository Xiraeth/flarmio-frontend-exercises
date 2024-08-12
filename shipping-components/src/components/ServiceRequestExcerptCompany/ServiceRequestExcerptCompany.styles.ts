import styled from "styled-components";
import { ServiceRequestProps } from "./ServiceRequestExcerptCompany";

const getStatusColor = (status?: string) => {
  switch (status) {
    case "Offers Received":
      return "dodgerblue";
    case "No Offers":
      return "gray";
    case "Completed":
      return "#19AF19";
    default:
      return "gray";
  }
};

export const ServiceRequestWrapper = styled.div<ServiceRequestProps>`
  background: rgba(10, 50, 120, 0.1);
  margin: 20px 0;

  border-radius: 5px;
  padding: 10px;

  border-left: 8px solid ${({ status }) => getStatusColor(status)};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  box-shadow: 1px 3px 10px 2px rgba(0, 0, 0, 0.2);
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DisplayFlexDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const StatusDiv = styled.div`
  background-color: ${({ status }) => getStatusColor(status)};
  color: white;
  border: none;
  border-radius: 15px;
  padding: 2px 15px;
`;
