import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
import util from "./ReportTableHelpers";

const ReportTable = () => {
  /** Handlers **/
  const handlers = ReportTableHandlers();

  console.log("My mapping", util.groupByTimeframe(util.weekAndDayMap(), 2));

  return <section>{handlers.handleRenderDropdown()}</section>;
};

export default ReportTable;
