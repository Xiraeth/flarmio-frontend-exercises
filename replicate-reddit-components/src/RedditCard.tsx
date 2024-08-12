import React from "react";
import styled from "styled-components";

interface RedditCardProps {
  children?: React.ReactNode;
}

const RedditCard = styled.div`
  width: 50%;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;

  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.1);
`;

const RedditCardHeader = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
  font-size: 1.3rem;
  padding-top: 4rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  background-color: dodgerblue;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  & > div {
    cursor: pointer;
  }
`;

const RedditCardMainContent = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;

  & > div {
    padding: 1rem;
    display: flex;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

const RedditCardFooter = styled.div`
  background-color: dodgerblue;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  & > div {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  & > div > div {
    padding: 10px;
    color: dodgerblue;
    font-weight: bold;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    cursor: pointer;
  }

  & > button {
    background-color: dodgerblue;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 12px;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

const RedditCardComponent: React.FC<RedditCardProps> = ({ children }) => {
  return (
    <RedditCard>
      <RedditCardHeader>
        <div>Top</div>
        <div>News</div>
        <div>Communities</div>
      </RedditCardHeader>
      <RedditCardMainContent>{children}</RedditCardMainContent>
      <RedditCardFooter>
        <button>View all</button>
        <div>
          <div>Top</div>
          <div>Near you</div>
          <div>Sports</div>
          <div>Aww</div>
        </div>
      </RedditCardFooter>
    </RedditCard>
  );
};

export default RedditCardComponent;
