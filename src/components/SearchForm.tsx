import React from "react";
import { Container} from "react-bootstrap";
import styled from "styled-components";
import CustomDropdown from './CustomDropdown'
import CustomSearchButton from './CustomSearchButton'

const Input = styled.input`
  height: 40px;
  width: 39%;
  min-width: 250px;
  padding: 0 1em;
`;

const SearchContainer = styled(Container)`
    margin-left: 40px;
`

const SearchForm: React.FC = () => {
  return (
    <SearchContainer>
      <form style={{display: 'flex'}}>
        <Input type="text" placeholder="what are you looking for?" />
        <CustomDropdown />
        <CustomSearchButton/>
      </form>
    </SearchContainer>
  );
};

export default SearchForm;
