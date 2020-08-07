import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import NavIcons from "./NavIcons";

const StyledNav = styled(Container)`
  background-color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  width: 93%;
  @media screen and (max-width: 1051px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  @media screen and (max-width: 450px) {
    align-items: end;
  }
`;

const Navbar: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <StyledNav fluid>
        <Logo />
        <SearchForm />
        <NavIcons />
      </StyledNav>
    </div>
  );
};

export default Navbar;
