import React from "react";
/** Constants **/
import { DAY_WORDS } from "../../../../util/constants";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";
/** Subcomponents **/
import TableCell from "./TableCell";

const AvailabilityTableHandlers = (parentHandlers) => {
  const { driverData } = parentHandlers;
  const { availability } = driverData;

  // takes [1,2,3,4] and converts to 1am 4am (start time - end time)
  const renderStartEnd = (arr, day_i) => {
    const start = arr[0];
    const end = arr[arr.length - 1];
    return [
      <TableCell
        dayIndex={day_i}
        setDriverData={parentHandlers.setDriverData}
        start={start}
        end={end}
      >
        {start}
      </TableCell>,
      <TableCell start={start} end={end}>
        {end}
      </TableCell>,
    ];
  };

  const renderRows = () => {
    return DAY_WORDS.map((day, day_i) => {
      const css_class = day_i % 2 === 1 ? "positive_tr" : "negative_tr";

      // if current day has preferences
      const preferences = availability[day_i];
      if (preferences) {
        // group into consecutive days
        const grouped = groupConsecutiveHours(preferences);

        return grouped.map((grouping, i) => {
          if (i === 0) {
            // set up first row
            return (
              <tr className={css_class}>
                <th>{day}</th>
                {renderStartEnd(grouping, day_i)}
              </tr>
            );
          }
          // set up consecutive rows with no title
          return (
            <tr className={css_class}>
              <th></th>
              {renderStartEnd(grouping)}
            </tr>
          );
        });
      }

      // if no preferences, return a row with a heeder and placeholders
      return (
        <tr className={css_class}>
          <th>{day}</th>
          <th>-</th>
          <th>-</th>
        </tr>
      );
    });
  };

  return {
    renderRows,
  };
};

export default AvailabilityTableHandlers;

// return an array of arrays
function groupConsecutiveHours(arr) {
  // sort
  console.log("my arr", arr);

  const consecutiveSets = [];
  let currentSet = [arr[0]];
  let prevNum = arr[0];

  arr.forEach((num, i) => {
    if (i === 0) return;

    // if consecutive, add to current set
    if (num - 1 === prevNum) currentSet.push(num);
    else {
      // else break set and start new one
      consecutiveSets.push(currentSet);
      currentSet = [];
      currentSet.push(num);
    }
    prevNum = num;

    // if at the end of array, push remaining set
    if (i === arr.length - 1) consecutiveSets.push(currentSet);
  });

  return consecutiveSets;
}
