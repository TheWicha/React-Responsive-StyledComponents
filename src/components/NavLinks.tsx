import React from "react";
import { Container, Row} from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled(Container)`
    background-color: #23C9FF;
`;

const StyledNavElement = styled.div`
    padding: 1.5rem;
    color: white;
    cursor: pointer;
`;

const StyledRow = styled(Row)`
    justify-content: flex-end;
`

const Navbar: React.FC = () => {
  return (
    <StyledNav>
      <StyledRow>
        <StyledNavElement>Home</StyledNavElement>
        <StyledNavElement>About</StyledNavElement>
        <StyledNavElement>Blog</StyledNavElement>
      </StyledRow>
    </StyledNav>
  );
};

export default Navbar;
