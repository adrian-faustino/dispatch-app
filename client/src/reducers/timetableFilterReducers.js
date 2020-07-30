import {
  SET_SHOW_BOOKABLE_SLOTS,
  SET_SHOW_OUTSIDE_AVAILABILITY,
  SET_SHOW_CONTROLS,
  RESET_FILTERS,
  TOGGLE_FILTER_ELEMENT,
} from "../util/constants";

const initState = {
  showBookableSlots: false,
  showOutsideAvailability: false,
  showControls: false,
};

const timetableFilterReducers = (state = initState, action) => {
  switch (action.type) {
    case SET_SHOW_BOOKABLE_SLOTS:
      return { ...state, showBookableSlots: action.payload };
    case SET_SHOW_OUTSIDE_AVAILABILITY:
      return { ...state, showOutsideAvailability: action.payload };
    case SET_SHOW_CONTROLS:
      return { ...state, showControls: action.payload };
    case RESET_FILTERS:
      return initState;
    case TOGGLE_FILTER_ELEMENT:
      return { ...state, [action.element]: !state[action.element] };
    default:
      return state;
  }
};

export default timetableFilterReducers;
