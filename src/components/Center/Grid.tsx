import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";

const Grid:React.FC = () => {
  const [gridLgValue, setGridLgValue] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 1250 ? setGridLgValue(6) : setGridLgValue(4);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <StyledGrid>
      <StyledRow>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>1</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>2</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>3</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>1</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>2</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>3</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>1</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>2</Item>
        </StyledCol>
        <StyledCol xs={12} md={6} lg={gridLgValue}>
          <Item>3</Item>
        </StyledCol>
      </StyledRow>
    </StyledGrid>
  );
};

const StyledGrid = styled(Container)`
  height: 100%;
  margin-top: 20px;
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
export default Grid;
