import React from "react";
/** Handlers **/
import ReportTableHandlers from "./ReportTableHandlers";
import util from "./ReportTableHelpers";

const ReportTable = () => {
  /** Handlers **/
  const handlers = ReportTableHandlers();

  const mapping = util.weekAndDayMap();
  const grouping = util.groupByTimeframe(mapping, 2);
  const report = grouping.map((group) => {
    return util.generateReportForPeriod(group, "Chris");
  });

  // console.log("Mapping", mapping);
  // console.log("Grouping", grouping);
  // console.log("Report", report[0]);

  return (
    <section>
      <div>{handlers.handleRenderDropdown()}</div>
      <div>{handlers.handleRenderTable()}</div>
    </section>
  );
};

export default ReportTable;
