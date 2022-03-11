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
     {spotId:10,apartment:true},

     {spotId:11,house:true},
     {spotId:12,house:true},
     {spotId:13,house:true},
     {spotId:14,secondaryUnit:true},
     {spotId:15,house:true},

     {spotId:16,house:true},
     {spotId:17,house:true},
     {spotId:18,bnb:true},
     {spotId:19,house:true},
     {spotId:20,apartment:true},

     {spotId:21,secondaryUnit:true},
     {spotId:22,secondaryUnit:true},
     {spotId:23,secondaryUnit:true},
     {spotId:24,apartment:true},
     {spotId:25,apartment:true},


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
