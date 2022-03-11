'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Bookings', [
     {spotId: 1, userId:1, checkIn: new Date('March 12, 2022'), checkOut: new Date("March 14, 2022")},
     {spotId: 1, userId:2, checkIn: new Date('April 7, 2022'), checkOut: new Date("April 21, 2022")},
     {spotId: 1, userId:3, checkIn: new Date('May 1, 2022'), checkOut: new Date("May 10, 2022")},
     {spotId: 1, userId:4, checkIn: new Date('May 12, 2022'), checkOut: new Date("May 19, 2022")},
     {spotId: 1, userId:5, checkIn: new Date('May 25, 2022'), checkOut: new Date("June 5, 2022")},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Bookings', null, {});
  }
};
