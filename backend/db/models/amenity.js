'use strict';
module.exports = (sequelize, DataTypes) => {
  const Amenity = sequelize.define('Amenity', {
    spotId: DataTypes.INTEGER,
    pool: DataTypes.BOOLEAN,
    patio: DataTypes.BOOLEAN,
    firePit: DataTypes.BOOLEAN,
    firePlace: DataTypes.BOOLEAN,
    exerciseEquipment: DataTypes.BOOLEAN,
    wifi: DataTypes.BOOLEAN,
    tv: DataTypes.BOOLEAN,
    kitchen: DataTypes.BOOLEAN,
    washer: DataTypes.BOOLEAN,
    airConditioning: DataTypes.BOOLEAN,
    smokeAlarm: DataTypes.BOOLEAN,
    firstAidKit: DataTypes.BOOLEAN,
    fireExtinguisher: DataTypes.BOOLEAN
  }, {});
  Amenity.associate = function(models) {
    // associations can be defined here
    Amenity.belongsTo(models.Spot,{foreignKey:"spotId"})
  };
  return Amenity;
};
