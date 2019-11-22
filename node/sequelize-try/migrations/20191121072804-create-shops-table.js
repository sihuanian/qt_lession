'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('shops', {
    id: {
      type: Sequelize.INTEGER,
      autoIncreament: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    thumb_url: Sequelize.STRING,
    create_at: Sequelize.DATE,
    updated_at: Sequelize.DATE
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('shops')
};
