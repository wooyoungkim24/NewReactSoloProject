'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('PrivacyTypes', [
     {spotId:1, entire:true},
     {spotId:2, privateRoom:true},
     {spotId:3, privateRoom:true},
     {spotId:4, sharedRoom:true},
     {spotId:5, privateRoom:true},

     {spotId:6, privateRoom:true},
     {spotId:7, entire:true},
     {spotId:8, entire:true},
     {spotId:9, entire:true},
     {spotId:10, entire:true},

     {spotId:11, privateRoom:true},
     {spotId:12, privateRoom:true},
     {spotId:13, entire:true},
     {spotId:14, privateRoom:true},
     {spotId:15, privateRoom:true},

     {spotId:16, privateRoom:true},
     {spotId:17, privateRoom:true},
     {spotId:18, entire:true},
     {spotId:19, privateRoom:true},
     {spotId:20, privateRoom:true},

     {spotId:21, entire:true},
     {spotId:22, entire:true},
     {spotId:23, privateRoom:true},
     {spotId:24, entire:true},
     {spotId:25, privateRoom:true},


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('PrivacyTypes', null, {});
  }
};
