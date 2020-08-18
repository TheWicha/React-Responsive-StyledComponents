import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import CategoriesList from "../CatogoryList";
import Hamburger from "./Hamburger";
import Header from "./Header";

const AsideLeftMobile: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleOnClick = () => {
    setVisible(!visible);
  };

  return (
    <StyledCol lg="2">
      <HeaderWrraper>
        <Hamburger click={handleOnClick} />
        <Header />
      </HeaderWrraper>
      <hr></hr>
      <CategoriesList click={handleOnClick} isVisible={visible} />
    </StyledCol>
  );
};

export default AsideLeftMobile;

const StyledCol = styled(Col)`
  background-color: #fff;
  margin: 10px;
  text-align: center;
`;

const HeaderWrraper = styled.div`
margin-bottom: 19px;
  @media screen and (max-width: 992px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;

  }
`;
