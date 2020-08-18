import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <span>CATEGORIES:</span>

    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  margin-top: 35px;

  font-weight: 500;
  color: #ff5a00;
  text-align: center;
  letter-spacing: 1.25px;

  @media screen and (max-width: 992px){
    margin-top: 0px;
  }
`;
