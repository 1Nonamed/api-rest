"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actors extends Model {
    static associate(models) {
      this.belongsToMany(models.Contents, {
        through: "ContentActors",
        foreignKey: "actor_id",
      });
    }
  }
  Actors.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Actors",
      timestamps: false
    }
  );
  return Actors;
};
