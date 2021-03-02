"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    static associate(models) {
      // this.belongsToMany(models.Actors, {
      //   through: "ContentActors",
      //   foreignKey: "contentId",
      // });
    }
  }
  Contents.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      total_seasons: DataTypes.INTEGER,
      imdb_score: DataTypes.DECIMAL,
      release_dates: DataTypes.STRING,
      play_time: DataTypes.STRING,
      content_rating: DataTypes.INTEGER,
      total_episodes: DataTypes.INTEGER,
      content_type: DataTypes.INTEGER,
      imdb_link: DataTypes.STRING,
      imdb_score_votes: DataTypes.DECIMAL,
      languages: DataTypes.STRING,
      rating_details: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "Contents",
      timestamps: false,
    }
  );
  return Contents;
};
