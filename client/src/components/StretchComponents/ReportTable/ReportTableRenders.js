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
const tableRows = (dataArr, rowTitles) => {
  const jsx = [];
  let currentTr = [];
  let index = 0;
  for (let dataObj of dataArr) {
    const currentTitle = rowTitles[index];
    currentTr.push(<th scope="row">{currentTitle}</th>);
    currentTr.push(extractTableDataFromObj(dataObj));
    jsx.push(<tr>{currentTr}</tr>);
    index++;
    currentTr = [];
  }
  return jsx;
};
/** END: Render table **/

const render = { dropdownItems, dropdownMenu, tableHeaders, tableRows };

export default render;
