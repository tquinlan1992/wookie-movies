import React, { useContext, useState } from "react";
import styled from "styled-components";
import SearchContext from "../../searchContext";

const SearchForm = styled.form`
  margin-top: auto;
  margin-left: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

const HeaderWrapper = styled.div`
  padding: 15px;
  border-bottom-style: solid;
  boder-bottom-color: black;
  border-bottom-width: 3px;
`;

const HeaderColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

const Header: React.FC = () => {
  const { setSearch: onSearch } = useContext(SearchContext);
  const [searchInputValue, setSearchInputValue] = useState("");
  const onSearchInputChange = (search: string) => {
    setSearchInputValue(search);
  };
  const performSearch: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSearch(searchInputValue);
  };
  return (
    <HeaderWrapper>
      <HeaderColumns>
        <Column>
          <span>Wookie</span>
          <span>Movies</span>
        </Column>
        <Column>
          <SearchForm onSubmit={performSearch}>
            <input
              value={searchInputValue}
              onChange={(event) => onSearchInputChange(event.target.value)}
            />
          </SearchForm>
        </Column>
      </HeaderColumns>
    </HeaderWrapper>
  );
};

export default Header;
