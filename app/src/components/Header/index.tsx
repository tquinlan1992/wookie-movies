import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  margin-top: auto;
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

const Header: React.FC<{ onSearch: (search: string) => void }> = ({
  onSearch,
}) => {
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
          <form onSubmit={performSearch}>
            <SearchInput
              value={searchInputValue}
              onChange={(event) => onSearchInputChange(event.target.value)}
            />
          </form>
        </Column>
      </HeaderColumns>
    </HeaderWrapper>
  );
};

export default Header;
