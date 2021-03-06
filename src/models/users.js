"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasMany(models.ResetTokens, {
        foreignKey: "userId",
      }),
        this.belongsToMany(models.Roles, {
          through: "UserRoles",
          foreignKey: "userId",
        });
    }
  }
  Users.init(
    {
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
