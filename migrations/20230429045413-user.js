"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      userId: {
        type: Sequelize.UUID,
        primaryKey: true
      },
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      phone: Sequelize.INTEGER,
      updatedAt: Sequelize.DATE,
      createdAt: Sequelize.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  }
};
