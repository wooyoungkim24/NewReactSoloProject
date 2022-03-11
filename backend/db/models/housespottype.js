'use strict';
module.exports = (sequelize, DataTypes) => {
  const HouseSpotType = sequelize.define('HouseSpotType', {
    spotId: DataTypes.INTEGER,
    residential: DataTypes.BOOLEAN,
    cabin: DataTypes.BOOLEAN,
    villa: DataTypes.BOOLEAN,
    townhouse: DataTypes.BOOLEAN
  }, {});
  HouseSpotType.associate = function(models) {
    // associations can be defined here
    HouseSpotType.belongsTo(models.Spot, {foreignKey:"spotId"})
  };
  return HouseSpotType;
};
