/** DB **/
import { entries } from "../db/entries";

export const createEntry = (values, dateObj, callback) => {
  const { week, day, hour } = dateObj;
  const { driver, description } = values;
  const entryID = `${week}-${day}-${hour}`;
  const newEntry = { hour, description, driver };

  // validate

  // update db
  entries[entryID] = newEntry;

  // after successful entry
  callback(newEntry);
};
