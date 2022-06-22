'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      userName: 'john',
      email: 'john@example.com',
      password: '123456',
      gender: 0,
      phone: '0987654321',
      address: 'Hanoi',
      role: 'renter',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
