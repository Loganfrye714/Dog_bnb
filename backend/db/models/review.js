'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    dogHouseId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, { foreignKey: 'userId' });
    Review.belongsTo(models.DogHouse, { foreignKey: 'dogHouseId' });
  };
  return Review;
};
