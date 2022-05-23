'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User);
      Review.belongsTo(models.Product);
    }
  }
  Review.init(
    {
      UserId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER,
      review: DataTypes.STRING,
      rating: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
