'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Properties', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      area: {
        allowNull: false,
        type: Sequelize.STRING
      },
      bedroom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      bathroom: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      yearBuilt: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      waterPrice: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      electricPrice: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      districtId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      wardId: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Properties');
  }
};