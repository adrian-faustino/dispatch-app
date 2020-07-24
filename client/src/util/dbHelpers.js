/** DB **/
import { entries } from "../db/entries";
/** Constants **/
import {
  TIMESLOT_CONFLICT,
  DATE_REQUIRED,
  DRIVER_REQUIRED,
  DESCRIPTION_REQUIRED,
} from "../util/constants";
/** Helpers **/
import entryValidation from "../util/entryValidationHelpers";
const validate = entryValidation();

// ==> CREATE

export const createEntry = (values, dateObj, callback) => {
  console.log("Creating entry...", values, dateObj);
  const { week, day, hour } = dateObj;
  const { driver, description } = values;
  const date = `${week}-${day}-${hour}`;
  const newEntry = { date, description, driver };

  /** BEGIN: validation **/
  // check if empty fields
  if (!dateObj) return callback(null, { errMsg: DATE_REQUIRED });
  if (!driver) return callback(null, { errMsg: DRIVER_REQUIRED });
  if (!description) return callback(null, { errMsg: DESCRIPTION_REQUIRED });

  // check to see if taken
  const bookedSlot = validate.isBooked(dateObj);
  if (bookedSlot) {
    console.error(TIMESLOT_CONFLICT, bookedSlot);
    return callback(null, { errMsg: TIMESLOT_CONFLICT, payload: bookedSlot });
  }
  /** END: validation **/

  // update db
  entries[date] = newEntry;

  // after successful entry
  callback(newEntry);
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

// ==> UPDATE

// refactor #5: redundant function?
export const editEntry = (values, dateObj, callback) => {
  console.log("Editing entry...", values, dateObj);
  const { week, day, hour } = dateObj;
  const { driver, description } = values;
  const date = `${week}-${day}-${hour}`;
  const newEntry = { date, description, driver };

  // update db
  entries[date] = newEntry;

  // after successful entry
  callback(newEntry);
};

// ==> DELETE

export const deleteEntry = (date, callback) => {
  // delete form db
  console.log("entru id", date);
  delete entries[date];
  console.log("Entries", entries);

  // clear booked data for this slot
  callback(null);
};
