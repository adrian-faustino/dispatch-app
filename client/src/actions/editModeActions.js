import { SET_EDIT_MODE } from "../util/constants";

export const setEditMode = (bool) => {
  return {
    type: SET_EDIT_MODE,
    payload: bool,
  };
};
