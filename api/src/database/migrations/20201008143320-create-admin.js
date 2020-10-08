'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.createTable('admin', { id: Sequelize.INTEGER });
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.dropTable('admin');
  }
};
