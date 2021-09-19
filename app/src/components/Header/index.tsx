import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toPaths } from "../../pages/routes/paths";
import SearchContext from "../../searchContext";
import { useHistory } from "react-router-dom";

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
  padding: 15px 3% 15px 3%;
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

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Header: React.FC = () => {
  const { setSearch: onSearch } = useContext(SearchContext);
  const history = useHistory();
  const [searchInputValue, setSearchInputValue] = useState("");
  const onSearchInputChange = (search: string) => {
    setSearchInputValue(search);
  };
  const performSearch: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    history.push(toPaths.HOME());
    onSearch(searchInputValue);
  };
  return (
    <HeaderWrapper>
      <HeaderColumns>
        <Column>
          <StyledLink to={toPaths.HOME()}>
            <span>
              Wookie <br /> Movies
            </span>
          </StyledLink>
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
