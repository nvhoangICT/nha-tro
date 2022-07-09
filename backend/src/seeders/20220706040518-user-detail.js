'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserDetails', [
      {
        "id" : "4b1f7063-53c6-4438-9420-d46acd1df34e",
        "gender": 1,
        "dob": "2001-12-23",
        "phone": "0981262965",
        "address": "152 Hao Nam",
        "citizenId": "082312311",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      }
    ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserDetails');
  }
};