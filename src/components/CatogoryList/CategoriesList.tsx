import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import CategoryBox from "./CategoryBox";
import categories from "./categories";
import { AsideLeftProps } from "../types/types";

const StyledContainer = styled(Container)`
  padding-left: 0px;
  flex-direction: column;
  display: flex;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const CategoriesList: React.FC<AsideLeftProps> = ({
  isVisible,
}: AsideLeftProps) => {
  const [clickedCat, setClickedCat] = useState(categories);

  const handleClick = (name: string) => {
      setClickedCat(
        [...clickedCat].map((object) => {
          if (object.name === name) {
            return {
              ...object,
              click: object.click + 1,
            };
          } else return object;
        })
      )};

  const Goo: React.FC = () => {
    return (
      <div>
        {clickedCat.map((clicked, i) =>
          clicked.click !== 0 ? (
            <li key={i}>
              {`${clicked.name} was clicked ${clicked.click} times`}
            </li>
          ) : null
        )}
      </div>
    );
  };

  return (
    <StyledContainer style={{ display: isVisible ? "flex" : "none" }}>
      {categories.map((category, i) => (
        <CategoryBox
          key={i}
          name={category.name}
          icon={category.icon}
          click={() => {
            handleClick(category.name);
          }}
        />
      ))}
      <Goo />
    </StyledContainer>
  );
};

export default CategoriesList;
