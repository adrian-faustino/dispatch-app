import React from "react";
/** Constants **/
import { DAY_WORDS } from "../../../../util/constants";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";

const AvailabilityTableHandlers = (parentHandlers) => {
  const { driverData } = parentHandlers;
  const { availability } = driverData;

  // takes [1,2,3,4] and converts to 1am 4am (start time - end time)
  const renderStartEnd = (arr) => {
    const start = hourTo12hFormat(arr[0]);
    const end = hourTo12hFormat(arr[arr.length - 1]);
    return [<th>{start}</th>, <th>{end}</th>];
  };

  const renderRows = () => {
    return DAY_WORDS.map((day, i) => {
      // if current day has preferences
      const preferences = availability[i];
      if (preferences) {
        // group into consecutive days
        const grouped = groupConsecutiveHours(preferences);

        return grouped.map((grouping, i) => {
          if (i === 0) {
            // set up first row
            return (
              <tr>
                <th scope="row">{day}</th>
                {renderStartEnd(grouping)}
              </tr>
            );
          }
          // set up consecutive rows with no title
          return (
            <tr>
              <th></th>
              {renderStartEnd(grouping)}
            </tr>
          );
        });
      }

      // if no preferences, return a row with a heeder and placeholders
      return (
        <tr>
          <th scope="row">{day}</th>
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
