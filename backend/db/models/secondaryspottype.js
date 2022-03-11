'use strict';
module.exports = (sequelize, DataTypes) => {
  const SecondarySpotType = sequelize.define('SecondarySpotType', {
    spotId: DataTypes.INTEGER,
    guestHouse: DataTypes.BOOLEAN,
    guestSuite: DataTypes.BOOLEAN,
    farmStay: DataTypes.BOOLEAN,
    vacationHome: DataTypes.BOOLEAN
  }, {});
  SecondarySpotType.associate = function(models) {
    // associations can be defined here
    SecondarySpotType.belongsTo(models.Spot, {foreignKey:"spotId"})
  };
  return SecondarySpotType;
};
