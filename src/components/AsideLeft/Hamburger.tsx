import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { HamburgerProps } from "../types/types";

const Hamburger: React.FC<HamburgerProps> = ({ click }: HamburgerProps) => {
  return (
    <StyledHam onClick={click}>
      <FontAwesomeIcon icon={faBars} size={"2x"} />
    </StyledHam>
  );
};

export default Hamburger;

const StyledHam = styled.div`
  cursor: pointer;
  display: none;
  @media screen and (max-width: 992px){
    display: block;
  }
`;
