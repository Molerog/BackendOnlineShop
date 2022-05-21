'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Product.belongsToMany(models.Order,{through: 'ordershasproducts'})
    }
  }
  Product.init({
    product: DataTypes.STRING,
    price: DataTypes.FLOAT,
    SectionId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};