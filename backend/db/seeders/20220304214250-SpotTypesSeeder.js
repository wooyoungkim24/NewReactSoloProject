'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('SpotTypes', [
     {spotId:1,apartment:true},
     {spotId:2,apartment:true},
     {spotId:3,apartment:true},
     {spotId:4,apartment:true},
     {spotId:5,apartment:true}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('SpotTypes', null, {});
  }
};
