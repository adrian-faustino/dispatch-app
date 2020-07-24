/* Input: int. Output: string */
export const dayToWords = (index) => {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return DAYS[parseInt(index)];
};

/* Input: obj. Output: string */
// converts date Obj to 'w-d-h' string
export const dateObjToStringID = (dateObj) => {
  const { week, day, hour } = dateObj;
  return `${week}-${day}-${hour}`;
};
