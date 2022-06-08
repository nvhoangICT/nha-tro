'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Details', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.FLOAT
      },
      bedroom: {
        type: Sequelize.INTEGER
      },
      bathroom: {
        type: Sequelize.INTEGER
      },
      yearBuilt: {
        type: Sequelize.INTEGER
      },
      housePrice: {
        type: Sequelize.DOUBLE
      },
      waterPrice: {
        type: Sequelize.DOUBLE
      },
      electricPrice: {
        type: Sequelize.DOUBLE
      },
      rating: {
        type: Sequelize.FLOAT
      },
      description: {
        type: Sequelize.TEXT
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Details');
  }
};