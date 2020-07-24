import { TIMESLOT_CONFLICT, RESET_ERROR } from "../util/constants";

export const setError = (errObj) => {
  return {
    type: TIMESLOT_CONFLICT,
    payload: errObj,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};
