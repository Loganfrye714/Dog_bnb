'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DogHouses', [
        { totalDogsAllowed: 2, totalDogMats: 3, totalYardBathrooms: 1, summary: 'Beautiful two bedroom dog house with all of the amenties you could possibly want!', location: "Seattle, Washington", toys: true, dogFood: true, dogWalker: true, treats: true, price: 349.00, imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/711QAb2XypL._AC_SL1500_.jpg', createdAt: new Date(), updatedAt: new Date()},

        { totalDogsAllowed: 1, totalDogMats: 1, totalYardBathrooms: 1, summary: 'Modern home for those dogs who love design....', location: "Lakeview, Michigan", toys: true, dogFood: true, dogWalker: false, treats: true, price: 349.00, imgUrl: 'https://media.istockphoto.com/photos/funny-pug-dog-in-the-dog-house-picture-id516461357?k=6&m=516461357&s=612x612&w=0&h=C7L1EWt-JCUcTzHWG4C-jH3jzsFERZam2fxB2cdj0LA=', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('DogHouses', null, {});
  }
};
