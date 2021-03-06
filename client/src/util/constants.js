/** Redux actions **/
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const NEXT_WEEK = "NEXT_WEEK";
export const PREV_WEEK = "PREV_WEEK";
export const UPDATE_DATE = "UPDATE_DATE";
export const SET_DRIVER = "SET_DRIVER";
export const SET_ERROR = "SET_ERROR";
export const SET_APP_VIEW = "SET_APP_VIEW";
export const TOGGLE_SLIDE_IN = "TOGGLE_SLIDE_IN";
export const SET_EDIT_MODE = "SET_EDIT_MODE";
export const SET_SHOW_BOOKABLE_SLOTS = "SET_SHOW_BOOKABLE_SLOTS";
export const SET_SHOW_OUTSIDE_AVAILABILITY = "SET_SHOW_OUTSIDE_AVAILABILITY";
export const SET_SHOW_CONTROLS = "SET_SHOW_CONTROLS";
export const TOGGLE_FILTER_ELEMENT = "TOGGLE_FILTER_ELEMENT";
export const RESET_FILTERS = "RESET_FILTERS";

/** App Views **/
export const DRIVERS_VIEW = "DRIVERS_VIEW";
export const TASKS_VIEW = "TASKS_VIEW";
export const SCHEDULE_VIEW = "SCHEDULE_VIEW";
export const REPORT_VIEW = "REPORT_VIEW";
export const APP_VIEWS = [DRIVERS_VIEW, SCHEDULE_VIEW, REPORT_VIEW];

// => entry form modal toggle
export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";

/** Calendar constants **/
export const WEEKS = 52;
export const DAYS = 7;
export const DAY_WORDS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const HOURS = 24;

/** Data required for entries */
// => important: index 0 needs to be 'All' for ControllersHandlers.js
// STRETCH: Using as temp data source to add/delete users
export const DRIVERS = ["All", "Anna", "Bob", "Chris"];
export const DESCRIPTIONS = ["DROP OFF", "PICK UP", "MISC"];

/** Button inner text **/
export const prevWeek_btn = "⇦";
export const nextWeek_btn = "⇨";
export const submit_btn = "submit";
export const edit_btn = "edit";
export const delete_btn = "delete";
export const cancel_btn = "cancel";
export const add_btn = "➕";
export const defaultSuggestion_btn = "Choose available timeslot";

/** Error codes */
// => db error codes
export const TIMESLOT_CONFLICT = "TIMESLOT_CONFLICT";
export const DATE_REQUIRED = "DATE_REQUIRED";
export const DRIVER_REQUIRED = "DRIVER_REQUIRED";
export const DESCRIPTION_REQUIRED = "DESCRIPTION_REQUIRED";
export const RESET_ERROR = "RESET_ERROR";
export const INVALID_ENTRY_OBJ = "INVALID_ENTRY_OBJ";

/** Success codes **/
export const ENTRY_CREATE_200 = "ENTRY_CREATE_200";
export const ENTRY_UPDATE_200 = "ENTRY_UPDATE_200";
export const ENTRY_DELETE_200 = "ENTRY_DELETE_200";
export const ENTRY_OVERWRITE_200 = "ENTRY_OVERWRITE_200";

/** Suggestions.js **/
// constants used for helping calculate suggestions (selectors param)
export const WEEK_SELECTOR = "WEEK_SELECTOR";
export const DAY_SELECTOR = "DAY_SELECTOR";
export const HOUR_SELECTOR = "HOUR_SELECTOR";

/** ReportTable.js **/
// how days are divided for report (col 1)
export const DAY_RANGES = [2, 4, 7, 14, 28];
