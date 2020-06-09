import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";

const Hero = () => {
  return (
    <StyledHero>
      <StyledRow>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>1</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>2</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>3</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>1</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>2</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>3</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>1</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>2</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={4}>
          <Item>3</Item>
        </StyledCol>
      </StyledRow>
    </StyledHero>
  );
};

const StyledHero = styled(Container)`
  height: 100%;
  background-color: #23c9ff;
  margin-top: 20px;
  padding: 40px;
`;

const StyledRow = styled(Row)`
  margin: 0px;
`;

const StyledCol = styled(Col)`
  margin-top: 15px;
`;
const Item = styled.div`
  border: 1px solid black;
  margin: 0 auto;
  min-height: 300px;
  max-width: 250px;
`;
export default Hero;
