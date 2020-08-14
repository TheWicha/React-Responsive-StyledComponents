import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";


const NavIcons: React.FC = () => {
  return (
    <Icons>
      <div
        className="icons"
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <a href="/favorites">
          <FontAwesomeIcon className="icon" icon={faStar} size="2x" />
        </a>
        <a href="/messages">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} size="2x" />
        </a>
        <a href="/basket">
          <FontAwesomeIcon className="icon" icon={faShoppingBag} size="2x" />
        </a>
      </div>
    </Icons>
  );
};

export default NavIcons;

const Icons = styled(Container)`
  width: 25%;
  margin: 0;
  @media screen and (max-width: 1051px) {
    order: 2;
  }
  a {
    color: black;
  }
  .icon {
    margin: 3% 3% 3% 25px;
  }
  @media screen and (max-width: 450px) {
    margin: 0;
    width: 36%;
    padding-right: 0px;
    .icon {
      margin-left: 20px;
      font-size: 1.3em;
    }
  }
`;
