import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Grid from "./Grid";

const StyledCol = styled(Col)`
  background-color: #fff;
  margin: 10px;
  text-align: center;
`;

const Center:React.FC = () => {

  return (
    <StyledCol lg="6">
      <Grid />
    </StyledCol>
  );
};

export default Center;
