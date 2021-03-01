"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ContentDirectors", {
      director_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Directors",
          key: "director_id",
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
    await queryInterface.dropTable("ContentDirectors");
  },
};
