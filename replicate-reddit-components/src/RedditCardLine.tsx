import React from "react";
import styled from "styled-components";
import MyImage from "./css/MyImage";

export interface RedditLine {
  ranking: number;
  picURL: string;
  subreddit: string;
}

const RedditLineStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.1s ease;
`;

const JoinButton = styled.button`
  margin-left: auto;
  background: dodgerblue;
  color: white;
  border-radius: 20px;
  padding: 8px 15px;
  border: none;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: white;
    color: dodgerblue;
    border: 1px solid dodgerblue;
  }
`;

const RankingText = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;

const RedditLineComponent: React.FC<RedditLine> = ({
  ranking,
  picURL,
  subreddit,
}) => {
  return (
    <RedditLineStyle>
      <RankingText>{ranking}</RankingText>
      <MyImage src={picURL} alt="Logo" />
      <div>r/{subreddit}</div>
      <JoinButton>Join</JoinButton>
    </RedditLineStyle>
  );
};

export default RedditLineComponent;
