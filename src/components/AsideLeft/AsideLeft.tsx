import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import CategoriesList from "../CatogoryList";
import Header from "./Header";

const AsideLeft: React.FC = () => {
  return (
    <StyledCol lg="2">
      <HeaderWrraper>
        <Header />
      </HeaderWrraper>
      <hr></hr>
      <CategoriesList isVisible={true} click={() => {}} />
    </StyledCol>
  );
};

export default AsideLeft;

const StyledCol = styled(Col)`
  background-color: #fff;
  margin: 10px;
  text-align: center;
`;

const HeaderWrraper = styled.div`
  margin-bottom: 19px;
`;
