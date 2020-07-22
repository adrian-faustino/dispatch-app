import { NEXT_WEEK, PREV_WEEK } from "../util/constants";

const initialState = {
  week: 0, // 1st week
  day: 1, // Monday
  time: 5, // 5am
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_WEEK:
      return {
        ...state,
        week: state.week + 1,
      };
    case PREV_WEEK:
      return {
        ...state,
        week: state.week - 1,
      };
    default:
      return state;
  }
};

export default dateReducer;
