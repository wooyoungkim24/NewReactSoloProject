'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PrivacyTypes', {
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
      entire: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      privateRoom: {
        defaultValue:false,
        type: Sequelize.BOOLEAN
      },
      sharedRoom: {
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
    return queryInterface.dropTable('PrivacyTypes');
  }
};
