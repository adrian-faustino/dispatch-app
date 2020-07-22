import { INCREMENT, DECREMENT, NEXT_WEEK, PREV_WEEK } from "../util/constants";

/* use increment and decrement to jump through timetable date index */
export const increment = (val) => {
  return {
    type: INCREMENT,
    payload: val,
  };
};

export const decrement = (val) => {
  return {
    type: DECREMENT,
    payload: val,
  };
};

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
