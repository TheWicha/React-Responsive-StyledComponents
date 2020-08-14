import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import CustomDropdown from "./CustomDropdown";
import CustomSearchButton from "./CustomSearchButton";

const Input = styled.input`
  height: 40px;
  width: 66%;

  padding: 0 1em;
  @media screen and (max-width: 1051px) {
    width: 74%;
  }
`;

const SearchContainer = styled(Container)`
  margin-left: 40px;
  @media screen and (max-width: 1051px) {
    margin: 0px;
    order: 3;
    max-width: 100%;
  }

  @media screen and (max-width: 450px) {
    margin-left: 0;
    padding: 0;
  }
`;

const SearchForm: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <SearchContainer>
      <form style={{ display: "flex", justifyContent: 'flex-end' }}>
        <Input
          type="text"
          placeholder="what are you looking for?"
          value={inputValue}
          onChange={handleChange}
        />
        <CustomDropdown />
        <CustomSearchButton />
      </form>
    </SearchContainer>
  );
};

export default SearchForm;
