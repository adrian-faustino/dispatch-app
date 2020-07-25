/** Helpers **/
import { getOccupiedSlots } from "../../util/dbHelpers";
import { dateObjToStringID } from "../../util/formatHelpers";
import {
  WEEK_SELECTOR,
  DAY_SELECTOR,
  HOUR_SELECTOR,
  WEEKS,
  DAYS,
  HOURS,
} from "../../util/constants";

const SuggestionsHandlers = (dispatch, store) => {
  const dateObj = store.date;
  const currentDate = dateObjToStringID(dateObj);
  const occupiedSlots = getOccupiedSlots();

  // suggestions within same day
  const calcWithinHour = () => {
    let breaker = HOURS;
    let delta = 1;

    const results = ["ahead", "behind"].map((type) => {
      let suggestion;
      switch (type) {
        case "ahead":
          suggestion = aheadDate(currentDate, HOUR_SELECTOR, delta);
          while (occupiedSlots.includes(suggestion)) {
            suggestion = aheadDate(currentDate, HOUR_SELECTOR, delta);
            delta++;
            breaker--;
            if (breaker === 0) break;
          }
          delta = 1;
          return suggestion;
        case "behind":
          suggestion = behindDate(currentDate, HOUR_SELECTOR, delta);
          while (occupiedSlots.includes(suggestion)) {
            suggestion = behindDate(currentDate, HOUR_SELECTOR, delta);
            delta++;
            breaker--;
            if (breaker === 0) break;
          }
          delta = 1;
          return suggestion;
      }
    });
    return results;
  };

  return { calcWithinHour };
};

export default SuggestionsHandlers;

// function that takes a date string and increases the 'week' or 'day' or 'hour' - return string
function aheadDate(dateStr, selector, delta) {
  const [week, day, hour] = dateStr.split("-").map((e) => parseInt(e));
  let newDate;

  switch (selector) {
    case WEEK_SELECTOR:
      if (week + delta > WEEKS) return dateStr;
      newDate = `${week + delta}-${day}-${hour}`;
    case DAY_SELECTOR:
      if (day + delta > DAYS) return dateStr;
      newDate = `${week}-${day + delta}-${hour}`;
    case HOUR_SELECTOR:
      if (hour + delta > HOURS) return dateStr;
      newDate = `${week}-${day}-${hour + delta}`;
  }
  return newDate;
}

function behindDate(dateStr, selector, delta) {
  const [week, day, hour] = dateStr.split("-").map((e) => parseInt(e));
  let newDate;

  switch (selector) {
    case WEEK_SELECTOR:
      if (week - delta > WEEKS) return dateStr;
      newDate = `${week - delta}-${day}-${hour}`;
    case DAY_SELECTOR:
      if (day - delta > DAYS) return dateStr;
      newDate = `${week}-${day - delta}-${hour}`;
    case HOUR_SELECTOR:
      if (hour - delta > HOURS) return dateStr;
      newDate = `${week}-${day}-${hour - delta}`;
  }
  return newDate;
}

function setBreaker(selector) {
  switch (selector) {
    case WEEK_SELECTOR:
      return WEEKS;
    case DAY_SELECTOR:
      return DAYS;
    case HOUR_SELECTOR:
      return HOURS;
  }
}
