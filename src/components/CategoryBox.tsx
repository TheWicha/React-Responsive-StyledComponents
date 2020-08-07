import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryBoxProps from './types/types'

const CategoryBox = (props: CategoryBoxProps) => {
  return (
    <StyledContainer>
      <a href="/">
        <FontAwesomeIcon
          icon={props.icon}
          size="lg"
          style={{ minWidth: "40px" }}
          />
        <CatName>{props.name}</CatName>
      </a>
    </StyledContainer>
  );
};

export default CategoryBox;

const StyledContainer = styled(Container)`
  padding-left: 0px;
  a {
    display: flex;
    flex-direction: row;
    align-items: end;
    text-transform: capitalize;
    text-decoration: none;
    color: #989898;
    margin-top: 15px;
    &:hover {
      border-left: 2px solid #ff5a00;
      margin-left: -15px;
      padding-left: 13px;
      color: #ff5a00;
    }
  }
`;

const CatName = styled.span`
  padding-left: 10px;
  font-weight: 400;
  letter-spacing: 1.25px;
`;