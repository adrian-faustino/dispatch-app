import React, { useState } from "react";
/** DB **/
import entries from "../../../db/entries";
import drivers from "../../../db/drivers";
/** Helpers **/
import util from "./ReportTableHelpers";
import render from "./ReportTableRenders";
/** Constants **/
import { DAY_RANGES } from "../../../util/constants";
/** Reacstrap **/
import { Dropdown, DropdownToggle } from "reactstrap";

const ReportTableHandlers = () => {
  /** State **/
  // how days are divided for report (col 1)
  const [timeFrame, setTimeFrame] = useState();
  // dropdown state handlers
  const [isOpen, setDropdownOpen] = useState(false);

  const handleRenderTimeframeSelection = () => {
    const innerText = DAY_RANGES.map((day) => `${day} days`);
    return render.dropdownItems(innerText, (e) =>
      setTimeFrame(e.target.innerText)
    );
  };

  const handleRenderDropdown = () => {
    const items = handleRenderTimeframeSelection();
    return (
      <Dropdown isOpen={isOpen} toggle={() => setDropdownOpen(!isOpen)}>
        <DropdownToggle caret>{timeFrame}</DropdownToggle>
        {render.dropdownMenu(items)}
      </Dropdown>
    );
  };

  return {
    handleRenderDropdown,
  };
};

export default ReportTableHandlers;
