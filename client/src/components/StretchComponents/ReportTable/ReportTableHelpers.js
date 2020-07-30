/** DB **/
import { entries } from "../../../db/entries";
/** Constants **/
import { DAYS, WEEKS, HOURS, DESCRIPTIONS } from "../../../util/constants";
const TOTAL_DAYS = WEEKS * DAYS; // 52 * 7

// returns array with w-d keys [0-1, 0-2, ..., 52-7]
const weekAndDayMap = () => {
  const result = [];
  for (let week = 0; week < WEEKS; week++) {
    for (let day = 0; day < DAYS; day++) {
      result.push(`${week}-${day}`);
    }
  }
  return result;
};

// return object with all the descriptions as keys, and initialize 0 count (used for counting descriptions in report). {TASK_A: 0, TASK_B: 0, ..., TASK_Z: 0}
const descriptionCounters = () => {
  const obj = {};
  for (let description of DESCRIPTIONS) {
    obj[description] = 0;
  }
  return obj;
};

// Input: ['w-d1', 'w-d2', 'w-d3']. Return pick ups, drop offs, tasks in object
const generateReportForPeriod = (period, driver) => {
  const counters = descriptionCounters();
  period.forEach((date) => {
    for (let hour = 0; hour < HOURS; hour++) {
      const id = `${date}-${hour}`;
      const currentEntry = entries[id];
      if (currentEntry && currentEntry.driver === driver) {
        counters[currentEntry.description] = +1;
      }
    }
  });
  return counters;
};

// Input: timeframe int. Return array of array groupings. Timeframe of 2 days => [['w-d1','w-d2], ['w-d3', w-d4'], ... ]
const groupByTimeframe = (period, timeframe) => {
  const result = [];
  let currentGrouping = [];
  period.forEach((date, i) => {
    currentGrouping.push(date);
    if (currentGrouping.length === timeframe) {
      result.push(currentGrouping);
      currentGrouping = [];
    }
  });
  return result;
};
// ** CURRENT TASK

const util = { weekAndDayMap, generateReportForPeriod, groupByTimeframe };

export default util;
