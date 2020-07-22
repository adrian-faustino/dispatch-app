import { INCREMENT, DECREMENT } from "../util/constants";

const initialState = 0;

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export default testReducer;
