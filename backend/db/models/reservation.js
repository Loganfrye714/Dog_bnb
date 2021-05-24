'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: DataTypes.INTEGER,
    dogHouseId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    price: DataTypes.INTEGER,
    totalCost: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.DogHouse, { foreignKey: 'dogHouseId' });
    Reservation.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Reservation;
};
