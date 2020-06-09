import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "./Logo";
import SearchForm from "./SearchForm";

const StyledNav = styled(Container)`
  background-color: white;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const Navbar: React.FC = () => {
  return (
    <StyledNav fluid>
      <Logo />
      <SearchForm />
    </StyledNav>
  );
};

export default Navbar;
