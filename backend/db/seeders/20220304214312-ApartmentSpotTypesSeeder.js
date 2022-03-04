'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('ApartmentSpotTypes', [
     {spotId:1, rental: true},
     {spotId:2, loft:true},
     {spotId:3, rental:true},
     {spotId:4, rental:true},
     {spotId:5, rental:true}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('ApartmentSpotTypes', null, {});
  }
};
