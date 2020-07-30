import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
import util from "./ReportTableHelpers";

const ReportTable = () => {
  /** Handlers **/
  const handlers = ReportTableHandlers();

  const mapping = util.weekAndDayMap();
  const grouping = util.groupByTimeframe(mapping, 2);

  console.log("Mapping", mapping);
  console.log("Grouping", grouping);

  return <section>{handlers.handleRenderDropdown()}</section>;
};

export default ReportTable;
