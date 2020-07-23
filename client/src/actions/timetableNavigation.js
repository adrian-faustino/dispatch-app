import {
  INCREMENT,
  DECREMENT,
  NEXT_WEEK,
  PREV_WEEK,
  UPDATE_DATE,
} from "../util/constants";

/* BEGIN: use increment and decrement to jump through timetable date index */
export const increment = (num) => {
  return {
    type: INCREMENT,
    payload: num,
  };
};

export const decrement = (num) => {
  return {
    type: DECREMENT,
    payload: num,
  };
};

// refactor: nextWeek and prevWeek can be simplified
export const nextWeek = () => {
  return {
    type: NEXT_WEEK,
  };
};

export const prevWeek = () => {
  return {
    type: PREV_WEEK,
  };
};
/* END: use increment and decrement to jump through timetable date index */

/*
 *
 */

/* Use to set time when booking new tasks/ selecting slot */
export const updateDate = (dateObj) => {
  return {
    type: UPDATE_DATE,
    payload: dateObj,
  };
};
