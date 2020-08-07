import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import CategoriesList from "./CategoriesList";

const AsideLeft = () => {
  const [visible, setVisible] = useState(true);

  const handleOnClick = () => {
    setVisible(!visible)
  }

  return (
    <StyledCol lg="2">
      <Header>
        <span
          onClick={handleOnClick}
        >
          CATEGORIES:
        </span>
        <hr></hr>
      </Header>
      <CategoriesList isVisible={visible}/>
    </StyledCol>
  );
};

export default AsideLeft;

const StyledCol = styled(Col)`
  background-color: #fff;
  margin: 10px;
  text-align: center;
`;

const Header = styled.header`
  margin-top: 35px;
  font-weight: 500;
  color: #ff5a00;
  text-align: center;
  letter-spacing: 1.25px;
`;
