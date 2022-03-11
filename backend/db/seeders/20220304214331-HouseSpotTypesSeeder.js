'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('HouseSpotTypes', [
     {spotId: 6,residential:true},
     {spotId: 11,residential:true},
     {spotId: 12,residential:true},
     {spotId: 13,residential:true},
     {spotId: 15,residential:true},
     {spotId: 16,townhouse:true},
     {spotId: 17,residential:true},
     {spotId: 19,residential:true},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('HouseSpotTypes', null, {});
  }
};
