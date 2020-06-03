import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from './Navbar'
import Hero from './Hero'

const StyledCol = styled(Col)`
    border: 1px solid black;
    margin: 10px;
`;

const Main: React.FC = () => {
  return (
      <Container>
          <Navbar />
          <Hero />
        <Row>
          <StyledCol>1 of 2</StyledCol>
        </Row>
        <Row>
          <StyledCol>1 of 3</StyledCol>
          <StyledCol>2 of 3</StyledCol>
          <StyledCol>3 of 3</StyledCol>
        </Row>
        <Row>
          <StyledCol>1 of 3</StyledCol>
          <StyledCol>2 of 3</StyledCol>
          <StyledCol>3 of 3</StyledCol>
        </Row>
      </Container>
  );
};

export default Main;
