import { TIMESLOT_CONFLICT } from "../util/constants";

const initialState = {
  errorMsg: null,
  payload: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMESLOT_CONFLICT:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
