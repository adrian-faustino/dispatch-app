import { SET_DRIVER } from "../util/constants";

export const setDriver = (val) => {
  return {
    type: SET_DRIVER,
    payload: val,
  };
};
