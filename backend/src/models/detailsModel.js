'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Details.init({
    area: DataTypes.FLOAT,
    bedroom: DataTypes.INTEGER,
    bathroom: DataTypes.INTEGER,
    yearBuilt: DataTypes.INTEGER,
    housePrice: DataTypes.DOUBLE,
    waterPrice: DataTypes.DOUBLE,
    electricPrice: DataTypes.DOUBLE,
    rating: DataTypes.FLOAT,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Details',
  });
  return Details;
};