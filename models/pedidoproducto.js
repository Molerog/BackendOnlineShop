'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PedidoProducto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PedidoProducto.init({
    PedidoId: DataTypes.INTEGER,
    ProductoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PedidoProducto',
  });
  return PedidoProducto;
};