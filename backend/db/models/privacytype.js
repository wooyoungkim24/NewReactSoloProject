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
    PrivacyType.belongsTo(models.Spot, {foreignKey:"spotId"})
  };
  return PrivacyType;
};
