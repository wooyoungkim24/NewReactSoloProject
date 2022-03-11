'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SecondarySpotTypes', {
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
      guestHouse: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      guestSuite: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      farmStay: {
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
    return queryInterface.dropTable('SecondarySpotTypes');
  }
};
