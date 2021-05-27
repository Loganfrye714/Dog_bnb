'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('DogHouses', [
        { totalDogsAllowed: 2, totalDogMats: 3, totalYardBathrooms: 1, summary: 'Beautiful two bedroom dog house with all of the amenties you could possibly want!', location: "Seattle, Washington", toys: true, dogFood: true, dogWalker: true, treats: true, price: 500.00, imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/711QAb2XypL._AC_SL1500_.jpg', createdAt: new Date(), updatedAt: new Date()},
        { totalDogsAllowed: 1, totalDogMats: 1, totalYardBathrooms: 1, summary: 'Modern home for those dogs who love design....', location: "Lakeview, Michigan", toys: true, dogFood: true, dogWalker: false, treats: true, price: 500.00, imgUrl: 'https://media.istockphoto.com/photos/funny-pug-dog-in-the-dog-house-picture-id516461357?k=6&m=516461357&s=612x612&w=0&h=C7L1EWt-JCUcTzHWG4C-jH3jzsFERZam2fxB2cdj0LA=', createdAt: new Date(), updatedAt: new Date()},
        { totalDogsAllowed: 1, totalDogMats: 2, totalYardBathrooms: 1, summary: 'luxury getaway in the sun', location: "Joshua Tree, California", toys: true, dogFood: true, dogWalker: false, treats: true, price: 500.00, imgUrl: 'https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto,h_480,q_60,w_720/v1505868127/campground-photos/l99zj7mus5lq2ydrk6zx.jpg', createdAt: new Date(), updatedAt: new Date()},
        { totalDogsAllowed: 2, totalDogMats: 1, totalYardBathrooms: 1, summary: 'Tiny home for a tiny dog', location: "Tahoe, California", toys: true, dogFood: true, dogWalker: false, treats: true, price: 500.00, imgUrl: 'https://inhabitat.com/wp-content/blogs.dir/1/files/2016/09/Durango-Tiny-House7-e1390942549991.jpg', createdAt: new Date(), updatedAt: new Date()},
        { totalDogsAllowed: 6, totalDogMats: 3, totalYardBathrooms: 2, summary: 'Sedona getaway', location: "Sedona, Arizona", toys: true, dogFood: true, dogWalker: true, treats: true, price: 500.00, imgUrl: 'https://sellsedona.com/wp-content/uploads/sites/152/2015/05/1-Front-View-of-Sun-Up-Ranch-copy-1-1024x683.jpg', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('DogHouses', null, {});
  }
};
