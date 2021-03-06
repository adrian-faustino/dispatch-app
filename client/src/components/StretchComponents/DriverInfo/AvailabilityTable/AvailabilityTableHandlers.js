import React from "react";
/** Constants **/
import { DAY_WORDS } from "../../../../util/constants";
/** Helpers **/
import { hourTo12hFormat } from "../../../../util/formatHelpers";
/** Subcomponents **/
import TableCell from "./TableCell";

// These props are passed down from DriverInfo.js
// parentHandlers from DriverHandlers.js
const AvailabilityTableHandlers = (parentHandlers) => {
  const { driverData, setDriverData } = parentHandlers;
  const { availability } = driverData;

  // takes [1,2,3,4] and converts to 1am 4am (start time - end time)
  const renderStartEnd = (arr, day_i) => {
    const start = arr[0];
    const end = arr[arr.length - 1];
    const driverHandlers = {
      driverData,
      setDriverData,
    };

    return [start, end].map((hour, i) => (
      <th key={`${hour + i}-start-end`}>{hourTo12hFormat(hour)}</th>
    ));
  };

  const renderRows = () => {
    return DAY_WORDS.map((day, day_i) => {
      // apply bg color every 2nd row
      const css_class = day_i % 2 === 1 ? "positive_tr" : "negative_tr";

      // if current day has preferences
      const preferences = availability[day_i];
      if (preferences) {
        // if there are no hours, return row placeholder
        if (preferences.length === 0)
          return (
            <tr
              key={`${day}-${day_i}-tr`}
              onClick={parentHandlers.handleToggleEditMode}
              className={css_class}
            >
              <th>{day}</th>
              <th>-</th>
              <th>-</th>
            </tr>
          );

        // group into consecutive days
        const grouped = groupConsecutiveHours(preferences);

        return grouped.map((grouping, i) => {
          if (i === 0) {
            // set up first row
            return (
              <tr key={`${day}day-${i}grouping`} className={css_class}>
                <th>{day}</th>
                {renderStartEnd(grouping, day_i)}
              </tr>
            );
          }
          // set up consecutive rows with no title
          return (
            <tr key={`${day}day-${i}grouping`} className={css_class}>
              <th></th>
              {renderStartEnd(grouping)}
            </tr>
          );
        });
      }

      // if no preferences, return a row with a heeder and placeholders
      return (
        <tr key={`${day}-${day_i}-tr`} className={css_class}>
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
  const sortedArr = arr.sort((a, b) => a - b);

  const consecutiveSets = [];
  let currentSet = [sortedArr[0]];
  let prevNum = sortedArr[0];

  sortedArr.forEach((num, i) => {
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
