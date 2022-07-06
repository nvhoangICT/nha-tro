'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: "Hoang",
        email: "hoang@example.com",
        password: "123123",
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Hoang",
        email: "hoang1@example.com",
        password: "123123",
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
