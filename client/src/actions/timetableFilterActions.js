import { RESET_FILTERS, TOGGLE_FILTER_ELEMENT } from "../util/constants";

export const updateViewFilter = (action, bool) => {
  return {
    type: action,
    payload: bool,
  };
};

export const toggleFilter = (element) => {
  return {
    type: TOGGLE_FILTER_ELEMENT,
    element,
  };
};

export const resetFilters = () => {
  return {
    type: RESET_FILTERS,
  };
};
