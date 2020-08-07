import React from "react";
import { Container } from "react-bootstrap";
import Navbar from './Navbar'
import MainWrapper from './MainWrapper'



const Main: React.FC = () => {
  return (
      <Container fluid style={{padding:'0'}}>
          <Navbar />
          <MainWrapper />
      </Container>
  );
};

export default Main;
