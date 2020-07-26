import { SET_APP_VIEW } from "../util/constants";

export const updateAppView = (viewStr) => {
  return {
    type: SET_APP_VIEW,
    payload: viewStr,
  };
};
