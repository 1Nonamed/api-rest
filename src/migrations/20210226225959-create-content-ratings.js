"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ContentRatings", {
      content_rating_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content_type_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "ContentTypes",
          key: "content_type_id",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      last_updated: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ContentRatings");
  },
};
