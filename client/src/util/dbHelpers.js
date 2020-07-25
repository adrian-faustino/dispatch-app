/** DB **/
import { entries } from "../db/entries";
/** Constants **/
import {
  TIMESLOT_CONFLICT,
  DATE_REQUIRED,
  DRIVER_REQUIRED,
  DESCRIPTION_REQUIRED,
  ENTRY_CREATE_200,
  ENTRY_UPDATE_200,
} from "../util/constants";
/** Helpers **/
import entryValidation from "../util/entryValidationHelpers";
const validate = entryValidation();

// ==> CREATE

export const createEntry = (entryObj, callback) => {
  console.log("Creating entry...");
  const { date, description, driver } = entryObj;

  /** BEGIN: validation **/
  // check if empty fields
  if (!date) return callback(null, { errMsg: DATE_REQUIRED });
  if (!driver) return callback(null, { errMsg: DRIVER_REQUIRED });
  if (!description) return callback(null, { errMsg: DESCRIPTION_REQUIRED });

  // check to see if taken
  const bookedSlot = validate.isBooked(date);
  if (bookedSlot) {
    console.error(TIMESLOT_CONFLICT, bookedSlot);
    return callback(null, {
      errMsg: TIMESLOT_CONFLICT,
      payload: bookedSlot,
      bookingAttempt: entryObj,
    });
  }
  /** END: validation **/

  // update db
  entries[date] = entryObj;

  // after successful entry
  callback({ msg: ENTRY_CREATE_200, data: entryObj });
};

// ==> READ

// return obj with driver schedule
export const getDriverEntries = (currentDriver) => {
  const filteredByDriver = {};
  for (let entryID in entries) {
    const currentEntry = entries[entryID];
    if (currentEntry.driver === currentDriver) {
      filteredByDriver[entryID] = currentEntry;
    }
  }
  return filteredByDriver;
};

// return obj with arrays of occupied dates
export const getOccupiedSlots = () => {
  return Object.keys(entries);
};

// ==> UPDATE

export const editEntry = (entryObj, callback) => {
  console.log("Editing entry...");
  const { date, description, driver } = entryObj;

  // update db
  entries[date] = entryObj;

  // after successful entry
  callback({ msg: ENTRY_UPDATE_200, data: entryObj });
};

// ==> DELETE

export const deleteEntry = (date, callback) => {
  console.log("Deleting entry...");
  // delete form db
  delete entries[date];
  // clear booked data for this slot
  callback(null);
};
