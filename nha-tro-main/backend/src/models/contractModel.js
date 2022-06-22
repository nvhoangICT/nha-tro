'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Contract.init({
    contractId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: sequelize.UUIDV4,
    },
    ownerId: DataTypes.UUID,
    renterId: DataTypes.UUID,
    houseId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contract',
  });
  return Contract;
};