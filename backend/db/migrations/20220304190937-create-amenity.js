'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Amenities', {
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
      pool: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      patio: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      firePit: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      firePlace: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      exerciseEquipment: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      wifi: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      tv: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      kitchen: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      washer: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      airConditioning: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      smokeAlarm: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      firstAidKit: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      fireExtinguisher: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: Sequelize.fn('now'),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Amenities');
  }
};
