import { TIMESLOT_CONFLICT, RESET_ERROR } from "../util/constants";

const initialState = {
  errorMsg: null,
  payload: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TIMESLOT_CONFLICT:
      return action.payload;
    case RESET_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default errorReducer;
