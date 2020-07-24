/** Redux actions **/
// => calendar navigation
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const NEXT_WEEK = "NEXT_WEEK";
export const PREV_WEEK = "PREV_WEEK";
export const UPDATE_DATE = "UPDATE_DATE";
export const SET_DRIVER = "SET_DRIVER";

// => entry form modal toggle
export const OPEN_FORM = "OPEN_FORM";
export const CLOSE_FORM = "CLOSE_FORM";

/** Calendar constants **/
export const WEEKS = 52;
export const DAYS = 7;
export const HOURS = 24;

/** Data required for entries */
// => important: index 0 needs to be 'All' for ControllersHandlers.js
export const DRIVERS = ["All", "Anna", "Bob", "Chris"];
export const DESCRIPTIONS = ["DROP OFF", "PICK UP", "MISC"];

/** Button inner text **/
export const prevWeek_btn = "prev";
export const nextWeek_btn = "next";

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
