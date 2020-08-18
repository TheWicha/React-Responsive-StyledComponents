import React, {useEffect, useState} from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import AsideLeft from "../AsideLeft";
import AsideLeftMobile from '../AsideLeft/AsideLeftMobile';
import Center from "../Center";
import AsideRight from "../AsideRight";
import Favorites from "../Favorites";
import { Switch, Route } from "react-router-dom";

const StyledRow = styled(Row)`
  margin: 0;
  display: flex;
  margin-top: 1em;
  width: 100%;
  justify-content: center;
`;

const ContentWrapper: React.FC = () => {
  
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 992 ? setIsMobile(true) : setIsMobile(false);
    };
  
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <StyledRow>
      {isMobile ? <AsideLeftMobile /> : <AsideLeft />}
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

export default ContentWrapper;
