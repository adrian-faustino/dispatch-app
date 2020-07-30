import { RESET_FILTERS } from "../util/constants";

export const updateViewFilter = (action, bool) => {
  return {
    type: action,
    payload: bool,
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};
