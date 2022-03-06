'use strict';
module.exports = (sequelize, DataTypes) => {
  const BnBSpotType = sequelize.define('BnBSpotType', {
    spotId: DataTypes.INTEGER,
    bnb: DataTypes.BOOLEAN,
    natureLodge: DataTypes.BOOLEAN,
    farmStay: DataTypes.BOOLEAN
  }, {});
  BnBSpotType.associate = function(models) {
    // associations can be defined here
    BnBSpotType.belongsTo(models.Spot,{foreignKey:"spotId"})
  };
  return BnBSpotType;
};
