export const drivers = {
  Anna: {
    name: "Anna",
    color: "#e7087f", // css color #
    availability: {
      hour_availability: [9, 10, 12, 13, 14, 15, 16, 17], // 9am - 5pm
      day_availability: [1, 2, 3, 4, 5], // Monday to Friday
    },
  },
  Bob: {
    name: "Bob",
    color: "#101cc1",
    availability: {
      hour_availability: [10, 12, 13, 14, 15],
      day_availability: [0, 1, 3, 5],
    },
  },
  Chris: {
    name: "Chris",
    color: "#0eec67",
    availability: {
      hour_availability: [6, 7, 8, 9, 16, 17, 18, 19, 20, 21],
      day_availability: [0, 1, 2, 5, 6],
    },
  },
};
