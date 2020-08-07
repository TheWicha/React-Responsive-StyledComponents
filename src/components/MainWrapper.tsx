import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import AsideLeft from "./AsideLeft";
import Center from "./Center";
import AsideRight from "./AsideRight";

const StyledRow = styled(Row)`
  margin: 0;
  display: flex;
  margin-top: 1em;
  width: 100%;
  justify-content: center;
`;

const MainWrapper = () => {
  return (
    <StyledRow>
      <AsideLeft />
      <Center />
      <AsideRight />
    </StyledRow>
  );
};

export default MainWrapper;
