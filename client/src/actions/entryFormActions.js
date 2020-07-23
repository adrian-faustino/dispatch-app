import { OPEN_FORM, CLOSE_FORM } from "../util/constants";

export const closeForm = () => {
  return {
    type: CLOSE_FORM,
  };
};

export const openForm = () => {
  return {
    type: OPEN_FORM,
  };
};
