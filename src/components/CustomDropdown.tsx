import React from "react";
import { Dropdown } from "react-bootstrap";



const CustomDropdown: React.FC = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-nav">
        All Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-6">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-7">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-8">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-9">Something else</Dropdown.Item>
        <Dropdown.Item href="#/action-10">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-11">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-12">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
