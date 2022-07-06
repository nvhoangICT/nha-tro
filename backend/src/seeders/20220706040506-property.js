'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Properties', [
      {
        name: "Phòng trọ 1 người",
        address: "33 Ngõ 56 Lê Quang Đạo",
        area: DataTypes.STRING,
        bedroom: DataTypes.INTEGER,
        bathroom: DataTypes.INTEGER,
        yearBuilt: DataTypes.INTEGER,
        price: DataTypes.FLOAT,
        waterPrice: DataTypes.FLOAT,
        electricPrice: DataTypes.FLOAT,
        status: DataTypes.BOOLEAN,
        description: DataTypes.STRING,
        districtId: DataTypes.INTEGER,
        wardId: DataTypes.INTEGER,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Properties');
  }
};
