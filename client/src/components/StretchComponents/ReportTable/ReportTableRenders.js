import React from "react";
/** Reactstrap **/
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// [constructor] returns JSX and any assigned onClick functions
const dropdownItems = (items, onClick) => {
  return items.map((item, i) => {
    return (
      <DropdownItem key={`${item}-${i}-dayRange`} onClick={onClick && onClick}>
        {item}
      </DropdownItem>
    );
  });
};

// [constructor] returns JSX of dropdown items container
const dropdownMenu = (dropdownItems) => {
  return <DropdownMenu>{dropdownItems}</DropdownMenu>;
};

const render = { dropdownItems, dropdownMenu };

export default render;
