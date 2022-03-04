'use strict';
module.exports = (sequelize, DataTypes) => {
  const FloorPlan = sequelize.define('FloorPlan', {
    spotId: DataTypes.INTEGER,
    guests: DataTypes.INTEGER,
    beds: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER
  }, {});
  FloorPlan.associate = function(models) {
    // associations can be defined here
    FloorPlan.hasOne(models.Spot, {foreignKey:"spotId"})
  };
  return FloorPlan;
};
