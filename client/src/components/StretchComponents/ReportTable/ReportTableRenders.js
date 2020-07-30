import React from "react";
/** Reactstrap **/
import {
  Table,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
/** Constants **/
import { DESCRIPTIONS } from "../../../util/constants";

/** BEGIN: Render timeframe dropdown **/
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
/** END: Render timeframe dropdown **/

/** BEGIN: Render table **/
const tableHeaders = () => {
  const withColumn1 = DESCRIPTIONS.unshift("Time-Frame");
  const headers = withColumn1.map((description, i) => (
    <th key={`${description}-${i}-report`}>{description}</th>
  ));
  return <tr>{headers}</tr>;
};

// Data arr will be an array of arrays of objs
const tableRows = (dataArr) => {
  return dataArr.map((dataObj) => {});
};
/** END: Render table **/

const render = { dropdownItems, dropdownMenu };

export default render;
