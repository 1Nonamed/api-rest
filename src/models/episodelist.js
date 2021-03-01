'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EpisodeList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  EpisodeList.init({
    seasonNum: DataTypes.INTEGER,
    episodeName: DataTypes.STRING,
    contentId: DataTypes.INTEGER,
    releaseDate: DataTypes.STRING,
    episodeRating: DataTypes.INTEGER,
    episodeNum: DataTypes.INTEGER,
    description: DataTypes.STRING,
    episodeImdbLink: DataTypes.STRING,
    episodeScoreVotes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EpisodeList',
    tableName: 'episode_list'
  });
  return EpisodeList;
};