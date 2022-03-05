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
     {spotId:5,apartment:true},

     {spotId:6,house:true},
     {spotId:7,secondaryUnit:true},
     {spotId:8,secondaryUnit:true},
     {spotId:9,apartment:true},
     {spotId:10,apartment:true}

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
