import { RESET_ERROR, SET_ERROR } from "../util/constants";

const initialState = {
  errMsg: null,
  payload: null,
};

const errorReducer = (state = initialState, action) => {
  // todo: get some sleep and refactor this...
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case RESET_ERROR:
      return initialState;
    default:
      return state;
  }
};

export default errorReducer;
