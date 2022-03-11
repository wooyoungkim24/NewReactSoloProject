'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    spotId: DataTypes.INTEGER,
    photoArray: DataTypes.ARRAY(DataTypes.TEXT)
  }, {});
  Photo.associate = function(models) {
    // associations can be defined here
    Photo.belongsTo(models.Spot, {foreignKey:"spotId"})
  };
  return Photo;
};
