import React, { useState } from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import CategoriesList from "../CatogoryList";
import Hamburger from './Hamburger'
import Header from './Header'

const AsideLeft: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleOnClick = () => {
    setVisible(!visible);
  };

  return (
    <StyledCol lg="2">
      <Hamburger click={handleOnClick}/>
      <Header />
      <CategoriesList isVisible={visible} />
    </StyledCol>
  );
};

export default AsideLeft;



const StyledCol = styled(Col)`
  background-color: #fff;
  margin: 10px;
  text-align: center;
`;


