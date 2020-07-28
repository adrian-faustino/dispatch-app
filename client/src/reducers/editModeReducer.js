/** Constants **/
import { SET_EDIT_MODE } from "../util/constants";

const initState = false;

const editModeReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_EDIT_MODE:
      return action.payload;
    default:
      return state;
  }
};

export default editModeReducer;
