'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        unique: true,
        type: Sequelize.STRING,
      },
    }, {});
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Categories');
  }
};
