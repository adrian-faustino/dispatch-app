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
/** Helpers **/
import { week_day_str_to_day_x } from "../../../util/formatHelpers";

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
// depending on range, return 'Day A - Day B'
// return array of strings
const generateTimeframeString = (grouping) => {
  const start = grouping[0];
  const end = grouping[grouping.length - 1];
  const _start = week_day_str_to_day_x(start);
  const _end = week_day_str_to_day_x(end);
  return `${_start} - ${_end}`;
};

const tableHeaders = () => {
  const withColumn1 = ["Time-Frame", ...DESCRIPTIONS];

  const headers = withColumn1.map((description, i) => (
    <th key={`${description}-${i}-report`}>{description}</th>
  ));
  return <tr>{headers}</tr>;
};

const extractTableDataFromObj = (dataObj) => {
  const td_JSX = [];
  for (let description of DESCRIPTIONS) {
    td_JSX.push(<td>{dataObj[description]}</td>);
  }
  return td_JSX;
};

// Data arr will be an array of arrays with one obj containing counters for each task {PICK-UP: 5, DROP-OFF: 10, MISC: 2}
const tableRows = (dataArr) => {
  return dataArr.map((dataObj) => {
    return <tr>{extractTableDataFromObj(dataObj)}</tr>;
  });
};
/** END: Render table **/

const render = { dropdownItems, dropdownMenu, tableHeaders, tableRows };

export default render;
