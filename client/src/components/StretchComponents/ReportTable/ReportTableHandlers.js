import React, { useState } from "react";
/** DB **/
import entries from "../../../db/entries";
import drivers from "../../../db/drivers";
/** Helpers **/
import util from "./ReportTableHelpers";
import render from "./ReportTableRenders";

/** Constants **/
import { DAY_RANGES, DRIVERS, DESCRIPTIONS } from "../../../util/constants";
/** Reacstrap **/
import { Dropdown, DropdownToggle, Table } from "reactstrap";

const ReportTableHandlers = (store) => {
  /** State **/
  // how days are divided for report (col 1)
  const [timeFrame, setTimeFrame] = useState("Select");
  // dropdown state handlers
  const [isOpen, setDropdownOpen] = useState(false);

  // every single "week-day" combination in order
  const mapping = util.weekAndDayMap();
  // range 2 => [[d1, d2], [d3, d4], [d5, d6]]
  const grouping = util.groupByTimeframe(mapping, timeFrame);
  // data
  const report = grouping.map((group) =>
    util.generateReportForPeriod(group, store.driver)
  );
  // header
  const timeframeRowStringMap = grouping.map((group) =>
    util.generateTimeframeString(group)
  );

  // cache for DL
  const mergedRows = util.mergeRows(timeframeRowStringMap, report);

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

  /** BEGIN: CSV handlers **/
  const cachedCSVdata = () => {
    const headers = ["Time-Frame", ...DESCRIPTIONS];
    const data = mergedRows;

    return { headers, data };
  };
  /** END: CSV handlers **/

  /** BEGIN: Render table **/
  const handleRenderTable = () => {
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
    timeFrame,
    cachedCSVdata,
    handleRenderDropdown,
    handleRenderTable,
  };
};

export default ReportTableHandlers;
