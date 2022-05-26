'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Order);
      User.hasMany(models.Review);
    }
  }
  User.init(
    {
      name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name needed',
        },
      },
    },
      surname: DataTypes.STRING,
      email:{ 
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull:{
          msg:'Email needed',
        },
        isEmail: {
          msg: 'Please insert a valid email adress'
        },
      },
    },
      confirmed: DataTypes.BOOLEAN,
      dni: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
          notNull:{
            msg:'You need to provide a password'
          },
        },
      },
      role: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
