'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ApartmentSpotTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      spotId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: "Spots"
          }
        }
      },
      rental: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      condo: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      loft: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      vacationHome: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ApartmentSpotTypes');
  }
};
