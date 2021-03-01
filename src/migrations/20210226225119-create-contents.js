"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Contents", {
      content_id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      total_seasons: {
        type: Sequelize.INTEGER,
      },
      imdb_score: {
        type: Sequelize.INTEGER,
      },
      release_dates: {
        type: Sequelize.STRING,
      },
      play_time: {
        type: Sequelize.STRING,
      },
      content_rating: {
        type: Sequelize.INTEGER,
      },
      total_episodes: {
        type: Sequelize.INTEGER,
      },
      content_type: {
        type: Sequelize.INTEGER,
      },
      imdb_link: {
        type: Sequelize.STRING,
      },
      last_updated: {
        type: Sequelize.DATE,
      },
      imdb_score_votes: {
        type: Sequelize.INTEGER,
      },
      rating_details: {
        type: Sequelize.JSON,
      },
      languages: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Contents");
  },
};
