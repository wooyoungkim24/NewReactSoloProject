'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    spotid: DataTypes.INTEGER,
    photoArray: DataTypes.ARRAY
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.hasOne(models.Spot, {foreignKey:"spotId"})
  };
  return Photo;
};
