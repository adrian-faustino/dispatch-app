import { SET_DRIVER, DRIVERS } from "../util/constants";

const initialState = DRIVERS[0];

const driverReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRIVER:
      return action.payload;
    default:
      return state;
  }
};

export default driverReducer;
