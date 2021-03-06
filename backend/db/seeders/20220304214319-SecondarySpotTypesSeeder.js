'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('SecondarySpotTypes', [
     {spotId:7, guestHouse:true},
     {spotId:8, guestHouse:true},
     {spotId:14, guestSuite:true},
     {spotId:21, guestSuite:true},
     {spotId:22, guestSuite:true},
     {spotId:23, guestHouse:true}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('SecondarySpotTypes', null, {});
  }
};
