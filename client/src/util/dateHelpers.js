/** Constants **/
import {
  WEEK_SELECTOR,
  DAY_SELECTOR,
  HOUR_SELECTOR,
  WEEKS,
  DAYS,
  HOURS,
  DRIVERS,
} from "../util/constants";

const isLeapYear = (yyyy) => {
  const year = parseInt(yyyy);
  if (year % 4 !== 0) return false;
  if (year % 100 === 0) {
    if (year % 400 === 0) return true;
    else return false;
  }
  // if all validation pass, it is leap year
  return true;
};

// returns max days in a month
const daysInMonth = (mm, yyyy) => {
  const month = parseInt(mm);
  const year = parseInt(yyyy);
  const monthsWith31d = [1, 3, 5, 7, 8, 10, 12];
  const monthsWith30d = [4, 6, 9, 11];
  const monthsWith28d = [2];

  if (monthsWith28d.includes(month)) {
    return isLeapYear(year) ? 29 : 28;
  } else if (monthsWith31d.includes(month)) {
    return 31;
  } else if (monthsWith30d.includes(month)) {
    return 30;
  }
};

const aheadDate = (dateStr, selector, delta) => {
  const [week, day, hour] = dateStr.split("-").map((e) => parseInt(e));
  let newDate;

  switch (selector) {
    case WEEK_SELECTOR:
      if (week + delta >= WEEKS) return null;
      newDate = `${week + delta}-${day}-${hour}`;
      break;
    case DAY_SELECTOR:
      if (day + delta >= DAYS) return null;
      newDate = `${week}-${day + delta}-${hour}`;
      break;
    case HOUR_SELECTOR:
      if (hour + delta >= HOURS) return null;
      newDate = `${week}-${day}-${hour + delta}`;
      break;
  }
  return newDate;
};

const behindDate = (dateStr, selector, delta) => {
  const [week, day, hour] = dateStr.split("-").map((e) => parseInt(e));
  let newDate;

  switch (selector) {
    case WEEK_SELECTOR:
      if (week - delta < 0) return null;
      newDate = `${week - delta}-${day}-${hour}`;
      break;
    case DAY_SELECTOR:
      if (day - delta < 0) return null;
      newDate = `${week}-${day - delta}-${hour}`;
      break;
    case HOUR_SELECTOR:
      if (hour - delta < 0) return null;
      newDate = `${week}-${day}-${hour - delta}`;
      break;
  }
  return newDate;
};

// limits max number of loops when calculating suggestion
const setBreaker = (selector) => {
  switch (selector) {
    case WEEK_SELECTOR:
      return WEEKS;
    case DAY_SELECTOR:
      return DAYS;
    case HOUR_SELECTOR:
      return HOURS;
  }
};

const dateUtil = { aheadDate, behindDate, setBreaker };
export default dateUtil;
