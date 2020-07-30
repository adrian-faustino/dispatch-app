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
import { Dropdown, DropdownToggle, Table } from "reactstrap";

const ReportTableHandlers = () => {
  /** State **/
  // how days are divided for report (col 1)
  const [timeFrame, setTimeFrame] = useState(2);
  // dropdown state handlers
  const [isOpen, setDropdownOpen] = useState(false);

  const mapping = util.weekAndDayMap();
  const grouping = util.groupByTimeframe(mapping, timeFrame);
  const report = grouping.map((group) =>
    util.generateReportForPeriod(group, "Chris")
  );
  console.log("Our report!", report);

  /** BEGIN: Render timeframe dropdown **/
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
  /** END: Render timeframe dropdown **/

  /** BEGIN: Render table **/
  const handleRenderTable = () => {
    return (
      <>
        <Table>
          <thead>{render.tableHeaders()}</thead>
          <tbody>{render.tableRows(report)}</tbody>
        </Table>
      </>
    );
  };
  /** END: Render table **/

  return {
    handleRenderDropdown,
    handleRenderTable,
  };
};

export default ReportTableHandlers;
