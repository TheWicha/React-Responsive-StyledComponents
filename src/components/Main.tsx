import React from "react";
import { Container } from "react-bootstrap";
import Navbar from './Navbar'



const Main: React.FC = () => {
  return (
      <Container fluid style={{padding:'0'}}>
          <Navbar />  
      </Container>
  );
};

export default Main;
