import { TOGGLE_SLIDE_IN } from "../util/constants";

const slideInReducer = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SLIDE_IN:
      return !state;
    default:
      return state;
  }
};

export default slideInReducer;
