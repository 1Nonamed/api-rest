'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    static associate(models) {
      // this.belongsToMany(models.Actors, {
      //   through: "ContentActors",
      //   foreignKey: "contentId",
      // });
    }
  };
  Contents.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    totalSeasons: DataTypes.INTEGER,
    imdbScore: DataTypes.INTEGER,
    releaseDates: DataTypes.STRING,
    playTime: DataTypes.STRING,
    contentRating: DataTypes.INTEGER,
    totalEpisodes: DataTypes.INTEGER,
    contentType: DataTypes.INTEGER,
    imdbLink: DataTypes.STRING,
    imdbScoreVotes: DataTypes.INTEGER,
    languages: DataTypes.STRING,
    ratingDetails: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Contents',
    tableName: 'contents'
  });
  return Contents;
};