'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DogHouses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      totalDogsAllowed: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalDogMats: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalYardBathrooms: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      summary: {
        allowNull: false,
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING
      },
      toys: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dogFood: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      dogWalker: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      treats: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      imgUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('DogHouses');
  }
};
