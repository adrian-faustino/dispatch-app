import { TIMESLOT_CONFLICT } from "../util/constants";

export const setError = (errObj) => {
  return {
    type: TIMESLOT_CONFLICT,
    payload: errObj,
  };
};
