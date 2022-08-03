'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserDetail.init({
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
    },
    gender: DataTypes.BOOLEAN,
    dob: DataTypes.DATEONLY,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    citizenId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};