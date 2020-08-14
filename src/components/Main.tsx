import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import ContentWrapper from "./ContentWrapper";
import { BrowserRouter as Router } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <Router>
      <Container fluid style={{ padding: "0" }}>
        <Navbar />
        <ContentWrapper />
      </Container>
    </Router>
  );
};

export default Main;
