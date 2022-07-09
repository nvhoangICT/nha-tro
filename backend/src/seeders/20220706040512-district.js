'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Districts', [
      {
        "id" : "1",
        "name" : "Hoàng Mai"
      },
      {
        "id" : "2",
        "name" : "Cầu Giấy"
      },
      {
        "id" :"3",
        "name" :"Đống Đa"
      },
      {
        "id" :"4",
        "name" :"Hai Bà Trưng"
      },
      {
        "id" :"5",
        "name" :"Nam Từ Liêm"
      },
      {
        "id" :"6",
        "name" :"Bắc Từ Liêm"
      },
      {
        "id" :"7",
        "name" :"Hoàn Kiếm"
      },
      {
        "id" :"8",
        "name" :"Thanh Xuân"
      },
      {
        "id" :"9",
        "name" :"Ba Đình"
      }
    ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Districts');
  }
};