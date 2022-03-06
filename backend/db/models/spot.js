'use strict';
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define('Spot', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    costPerNight: DataTypes.INTEGER,
    bookedStart: DataTypes.DATEONLY,
    bookedEnd:DataTypes.DATEONLY,
    address: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  Spot.associate = function(models) {
    // associations can be defined here
    Spot.belongsTo(models.User, {foreignKey:"userId"})
    Spot.hasOne(models.Amenity, {foreignKey:"spotId"})
    Spot.hasOne(models.SpotType, {foreignKey:"spotId"})
    Spot.hasOne(models.ApartmentSpotType, {foreignKey:"spotId"})
    Spot.hasOne(models.SecondarySpotType, {foreignKey:"spotId"})
    Spot.hasOne(models.HouseSpotType, {foreignKey:"spotId"})
    Spot.hasOne(models.BnBSpotType, {foreignKey:"spotId"})
    Spot.hasOne(models.PrivacyType, {foreignKey:"spotId"})
    Spot.hasOne(models.Photo, {foreignKey:"spotId"})
    Spot.hasOne(models.FloorPlan, {foreignKey:"spotId"})
    Spot.hasMany(models.Booking, {foreignKey:"spotId"})
  };
  return Spot;
};
