import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import CategoryBox from "./CategoryBox";
import categories from "./categories";
import { AsideLeftProps } from "../types/types";

const StyledContainer = styled(Container)`
  padding-left: 0px;
`;

const CategoriesList: React.FC<AsideLeftProps> = ({isVisible}: AsideLeftProps) => {

  return (
    <StyledContainer style={{ display: isVisible ? "block" : "none" }}>
      {categories.map((category, i) => (
        <CategoryBox key={i} name={category.name} icon={category.icon} />
      ))}
    </StyledContainer>
  );
};

export default CategoriesList;
