import { drivers } from "../db/drivers";

// CREATE

// READ
export const getDriverData = (driver, callback) => {
  // console.log("Fetching data for", driver);
  return callback(drivers[driver]);
};

// UPDATE
export const updateDriverData = (driverObj, callback) => {
  const ID = driverObj.name;
  drivers[ID] = driverObj;

  callback(drivers[ID]);
};

// DELETE
