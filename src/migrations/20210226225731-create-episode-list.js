"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("EpisodeLists", {
      episode_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      season_num: {
        type: Sequelize.INTEGER,
      },
      episode_name: {
        type: Sequelize.STRING,
      },
      content_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contents",
          key: "content_id",
        },
      },
      release_date: {
        type: Sequelize.STRING,
      },
      episode_rating: {
        type: Sequelize.DECIMAL,
      },
      episode_num: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      last_updated: {
        type: Sequelize.DATE,
      },
      episode_imdb_link: {
        type: Sequelize.STRING,
      },
      episode_score_votes: {
        type: Sequelize.INTEGER,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("EpisodeLists");
  },
};
