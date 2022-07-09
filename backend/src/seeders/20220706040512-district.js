'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Districts', [
      {
        "id" : "1",
        "name" : "Hoàng Mai",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" : "2",
        "name" : "Cầu Giấy",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" :"3",
        "name" :"Đống Đa",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" :"4",
        "name" :"Hai Bà Trưng",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" :"5",
        "name" :"Nam Từ Liêm",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" :"6",
        "name" :"Bắc Từ Liêm",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" :"7",
        "name" :"Hoàn Kiếm",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" :"8",
        "name" :"Thanh Xuân",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      },
      {
        "id" :"9",
        "name" :"Ba Đình",
        "createdAt": "2022-06-28 07:42:41",
        "updatedAt": "2022-06-28 07:42:41"
      }
    ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Districts');
  }
};