"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ContentGenres", {
      genre_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "Genres",
          key: "genre_id",
        },
      },
      content_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Contents",
          key: "content_id",
        },
      },
      last_updated: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ContentGenres");
  },
};
