'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Districts', [
      {
        "id" : "1",
        "name" : "Hoàng Mai"
      },
      {
        "id" : "1",
        "name" : "Hoàng Mai"
      },
    ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Districts');
  }
};