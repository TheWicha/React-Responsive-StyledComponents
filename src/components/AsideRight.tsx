import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  background-color: #fff;
  margin: 10px;
  text-align: center;
`;

const AsideRight = () => {
  return <StyledCol lg="3">aside right</StyledCol>;
};

export default AsideRight;
