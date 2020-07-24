import {
  INVALID_ENTRY_OBJ,
  DATE_REQUIRED,
  DESCRIPTION_REQUIRED,
  DRIVER_REQUIRED,
} from "../../util/constants";

// validate if an entry is valid
// NOT validating if entry exists in db
export const Entry = (entryObj) => {
  // validate if no params passed
  if (!entryObj) return console.error(INVALID_ENTRY_OBJ);

  const { date, description, driver } = entryObj;

  // validate if missing fields
  if (!date || !description || !driver) return console.error(INVALID_ENTRY_OBJ);
  if (!date) return console.error(DATE_REQUIRED);
  if (!description) return console.error(DESCRIPTION_REQUIRED);
  if (!driver) return console.error(DRIVER_REQUIRED);

  return { date, description, driver };
};
