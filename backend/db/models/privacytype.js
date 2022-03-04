'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrivacyType = sequelize.define('PrivacyType', {
    spotId: DataTypes.INTEGER,
    entire: DataTypes.BOOLEAN,
    privateRoom: DataTypes.BOOLEAN,
    sharedRoom: DataTypes.BOOLEAN
  }, {});
  PrivacyType.associate = function(models) {
    // associations can be defined here
    PrivacyType.hasOne(models.Spots, {foreignKey:"spotId"})
  };
  return PrivacyType;
};
