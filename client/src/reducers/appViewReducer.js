import { SCHEDULE_VIEW, DRIVERS_VIEW, SET_APP_VIEW } from "../util/constants";

const initialState = SCHEDULE_VIEW;

const appViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default appViewReducer;
