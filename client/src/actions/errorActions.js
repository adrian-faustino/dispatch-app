import { SET_ERROR, RESET_ERROR } from "../util/constants";

export const setError = (errObj) => {
  return {
    type: SET_ERROR,
    payload: errObj,
  };
};

export const resetError = () => {
  return {
    type: RESET_ERROR,
  };
};
