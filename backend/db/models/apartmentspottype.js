'use strict';
module.exports = (sequelize, DataTypes) => {
  const ApartmentSpotType = sequelize.define('ApartmentSpotType', {
    spotId: DataTypes.INTEGER,
    rental: DataTypes.BOOLEAN,
    condo: DataTypes.BOOLEAN,
    loft: DataTypes.BOOLEAN,
    vacationHom: DataTypes.BOOLEAN
  }, {});
  ApartmentSpotType.associate = function(models) {
    // associations can be defined here
    ApartmentSpotType.hasOne(models.Spot, {foreignKey:"spotId"})
  };
  return ApartmentSpotType;
};
