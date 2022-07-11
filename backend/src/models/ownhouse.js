'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OwnHouse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OwnHouse.init({
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
    },
    ownerId: DataTypes.CHAR(36)
  }, {
    sequelize,
    modelName: 'OwnHouse',
  });
  return OwnHouse;
};