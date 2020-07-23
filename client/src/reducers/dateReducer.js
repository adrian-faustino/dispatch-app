import { NEXT_WEEK, PREV_WEEK, UPDATE_DATE } from "../util/constants";

const initialState = {
  week: 0, // 1st week
  day: 1, // Monday
  hour: 5, // 5am
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
    case UPDATE_DATE:
      const { day, hour } = action.payload;
      return {
        ...state,
        day,
        hour,
      };
    default:
      return state;
  }
};

export default dateReducer;
