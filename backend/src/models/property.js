'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Property.init({
    id: {
      type: DataTypes.CHAR(36),
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    area: DataTypes.STRING,
    bedroom: DataTypes.INTEGER,
    bathroom: DataTypes.FLOAT,
    yearBuilt: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    waterPrice: DataTypes.FLOAT,
    electricPrice: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
    districtId: DataTypes.INTEGER,
  
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};