'use strict';
module.exports = (sequelize, DataTypes) => {
  const SpotType = sequelize.define('SpotType', {
    spotId: DataTypes.INTEGER,
    apartment: DataTypes.BOOLEAN,
    house: DataTypes.BOOLEAN,
    secondaryUnit: DataTypes.BOOLEAN,
    bnb: DataTypes.BOOLEAN
  }, {});
  SpotType.associate = function(models) {
    // associations can be defined here
    SpotType.hasOne(models.Spot, {foreignKey:"spotId"})
  };
  return SpotType;
};
