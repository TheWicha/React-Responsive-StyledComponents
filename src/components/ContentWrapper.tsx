import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import AsideLeft from "./AsideLeft";
import Center from "./Center";
import AsideRight from "./AsideRight";
import Favorites from "./Favorites";
import { Switch, Route } from "react-router-dom";

const StyledRow = styled(Row)`
  margin: 0;
  display: flex;
  margin-top: 1em;
  width: 100%;
  justify-content: center;
`;

const Wrapper: React.FC = () => {
  return (
    <StyledRow>
      <AsideLeft />
      <Switch>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/">
          <Center />
        </Route>
      </Switch>
      <AsideRight />
    </StyledRow>
  );
};

export default Wrapper;
