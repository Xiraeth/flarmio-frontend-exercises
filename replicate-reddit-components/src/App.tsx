import { useState, useEffect } from "react";
import "./css/styles.css";
import RedditCardComponent from "./RedditCard";
import RedditLineComponent from "./RedditCardLine";
const API_TOKEN = "3cb1f786eb8d3886687aa9d355a40aac89bbfd48";
const spreadsheetId = "1UugqQkL4BMZjGQy7JeNSbmymXXZWbrXD9gCipd0-YgU";

import { RedditLine } from "./RedditCardLine";

export default function App() {
  const [data, setData] = useState<RedditLine[]>([]);

  useEffect(() => {
    try {
      const queryData = async () => {
        const response = await fetch(
          `https://api.graphqlsheet.com/api/${spreadsheetId}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: API_TOKEN,
            },
            body: JSON.stringify({
              query: `
            {
              get {
                Ranking
                pictureURL
                Subreddit
              }
            }
          `,
            }),
          }
        );
        const responseJSON = await response.json();
        setData(responseJSON.data.get);
      };

      queryData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const renderRedditLine = (item: RedditLine): JSX.Element => {
    return (
      <RedditLineComponent
        key={item.ranking}
        ranking={item.ranking}
        picURL={item.picURL}
        subreddit={item.subreddit}
      />
    );
  };

  return (
    <RedditCardComponent>{data.map(renderRedditLine)}</RedditCardComponent>
  );
}
