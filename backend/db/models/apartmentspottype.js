'use strict';
module.exports = (sequelize, DataTypes) => {
  const ApartmentSpotType = sequelize.define('ApartmentSpotType', {
    spotId: DataTypes.INTEGER,
    rental: DataTypes.BOOLEAN,
    condo: DataTypes.BOOLEAN,
    loft: DataTypes.BOOLEAN,
    vacationHome: DataTypes.BOOLEAN
  }, {});
  ApartmentSpotType.associate = function(models) {
    // associations can be defined here
    ApartmentSpotType.belongsTo(models.Spot, {foreignKey:"spotId"})
  };
  return ApartmentSpotType;
};
