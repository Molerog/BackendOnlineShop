'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Seccion.init({
    moviles: DataTypes.STRING,
    tablets: DataTypes.STRING,
    accesorios: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seccion',
  });
  return Seccion;
};