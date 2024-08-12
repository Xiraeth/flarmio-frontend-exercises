import React from "react";
import findBooks from "./findBooks";
import "./styles/styles.css";
import SearchButton from "./components/searchButton/SearchButton";
import PageHeader from "./components/pageHeader/PageHeader";
import SearchInput from "./components/searchInput/SearchInput";
import FlexDiv from "./components/flexDiv/FlexDiv";
import MySelect from "./components/mySelect/MySelect";
import DisplayDataTable from "./components/displayDataTable/DisplayDataTable";
import { useState, useEffect } from "react";

interface BookInterface {
  objectID: string;
  title: string;
}

export default function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [searchOption, setSearchOption] = useState("Most points");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchOption(e.target.value);
  };

  const searchBooks = async () => {
    const result = await findBooks(search, searchOption);

    setData(result);
  };

  useEffect(() => {
    searchBooks();
  }, [searchOption]);

  return (
    <div className="App">
      <PageHeader>Library Search</PageHeader>
      <FlexDiv>
        <SearchInput
          onChange={handleInputChange}
          type="text"
          placeholder="Search for your book:"
          id="bookSearch"
        />
        <SearchButton onClick={searchBooks}>Search</SearchButton>
      </FlexDiv>

      <MySelect onChange={handleSelectChange}>
        <option value="Most points" default>
          Most points
        </option>
        <option value="Most comments" default>
          Most comments
        </option>
      </MySelect>

      <DisplayDataTable>
        {data &&
          data.map((book: BookInterface) => (
            <div key={book.objectID}>{book.title}</div>
          ))}
      </DisplayDataTable>
    </div>
  );
}
