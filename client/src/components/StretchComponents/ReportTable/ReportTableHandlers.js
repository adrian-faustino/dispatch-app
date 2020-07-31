import React, { useState } from "react";
/** DB **/
import entries from "../../../db/entries";
import drivers from "../../../db/drivers";
/** Helpers **/
import util from "./ReportTableHelpers";
import render from "./ReportTableRenders";

/** Constants **/
import { DAY_RANGES, DRIVERS } from "../../../util/constants";
/** Reacstrap **/
import { Dropdown, DropdownToggle, Table } from "reactstrap";

const ReportTableHandlers = (store) => {
  /** State **/
  // how days are divided for report (col 1)
  const [timeFrame, setTimeFrame] = useState(2);
  // dropdown state handlers
  const [isOpen, setDropdownOpen] = useState(false);

  /** BEGIN: Render timeframe dropdown **/
  const handleRenderTimeframeSelection = () => {
    return render.dropdownItems(DAY_RANGES, (e) =>
      setTimeFrame(parseInt(e.target.innerText))
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
    const mapping = util.weekAndDayMap();
    const grouping = util.groupByTimeframe(mapping, timeFrame);
    const report = grouping.map((group) =>
      util.generateReportForPeriod(group, store.driver)
    );
    const timeframeRowStringMap = grouping.map((group) =>
      util.generateTimeframeString(group)
    );

    return (
      <Table className="ReportTable__table-container">
        <thead className="ReportTable__table-headers">
          {render.tableHeaders()}
        </thead>
        <tbody>{render.tableRows(report, timeframeRowStringMap)}</tbody>
      </Table>
    );
  };
  /** END: Render table **/

  return {
    handleRenderDropdown,
    handleRenderTable,
  };
};

export default ReportTableHandlers;
