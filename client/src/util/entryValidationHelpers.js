import { entries } from "../db/entries";

// check if entry already exists - return entry
export const isBooked = (dateObj) => {
  const { week, day, hour } = dateObj;
  const entryID = `${week}-${day}-${hour}`;

  return entries[entryID];
};
