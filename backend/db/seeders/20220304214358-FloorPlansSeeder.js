'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('FloorPlans', [
     {spotId:1,guests:2, beds:1, bedrooms:1,bathrooms:2},
     {spotId:2,guests:3, beds:2, bedrooms:1,bathrooms:1},
     {spotId:3,guests:1, beds:3, bedrooms:2,bathrooms:1},
     {spotId:4,guests:4, beds:2, bedrooms:1,bathrooms:1},
     {spotId:5,guests:5, beds:2, bedrooms:1,bathrooms:2},
     {spotId:6,guests:1, beds:1, bedrooms:1,bathrooms:1},
     {spotId:7,guests:2, beds:1, bedrooms:1,bathrooms:1},
     {spotId:8,guests:2, beds:2, bedrooms:1,bathrooms:1},
     {spotId:9,guests:3, beds:3, bedrooms:2,bathrooms:1},
     {spotId:10,guests:3, beds:1, bedrooms:1,bathrooms:1},
     {spotId:11,guests:4, beds:2, bedrooms:1,bathrooms:2},
     {spotId:12,guests:1, beds:3, bedrooms:2,bathrooms:2},
     {spotId:13,guests:5, beds:3, bedrooms:2,bathrooms:2},
     {spotId:14,guests:2, beds:3, bedrooms:2,bathrooms:1},
     {spotId:15,guests:3, beds:1, bedrooms:1,bathrooms:2},
     {spotId:16,guests:3, beds:2, bedrooms:1,bathrooms:2},
     {spotId:17,guests:5, beds:3, bedrooms:2,bathrooms:1},
     {spotId:18,guests:5, beds:1, bedrooms:1,bathrooms:1},
     {spotId:19,guests:2, beds:2, bedrooms:1,bathrooms:1},
     {spotId:20,guests:1, beds:2, bedrooms:1,bathrooms:2},
     {spotId:21,guests:5, beds:2, bedrooms:1,bathrooms:2},
     {spotId:22,guests:3, beds:1, bedrooms:1,bathrooms:1},
     {spotId:23,guests:1, beds:1, bedrooms:1,bathrooms:2},
     {spotId:24,guests:1, beds:1, bedrooms:1,bathrooms:2},
     {spotId:25,guests:1, beds:3, bedrooms:2,bathrooms:1},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('FloorPlans', null, {});
  }
};
