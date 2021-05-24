'use strict';
module.exports = (sequelize, DataTypes) => {
  const DogHouse = sequelize.define('DogHouse', {
    totalDogsAllowed: DataTypes.INTEGER,
    totalDogMats: DataTypes.INTEGER,
    totalYardBathrooms: DataTypes.INTEGER,
    summary: DataTypes.STRING,
    location: DataTypes.STRING,
    toys: DataTypes.BOOLEAN,
    dogFood: DataTypes.BOOLEAN,
    dogWalker: DataTypes.BOOLEAN,
    treats: DataTypes.BOOLEAN,
    price: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
  }, {});
  DogHouse.associate = function(models) {
    DogHouse.hasMany(models.Review, { foreignKey: 'dogHouseId' });
    DogHouse.hasMany(models.Reservation, { foreignKey: 'dogHouseId' })
  };
  return DogHouse;
};
