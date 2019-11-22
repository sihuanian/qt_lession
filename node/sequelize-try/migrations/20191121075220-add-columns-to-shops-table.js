'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    // 新增字段
    queryInterface.addColumn(
      'shops', 'address', {
      type: Sequelize.STRING
    }
    ),

  down: (queryInterface, Sequelize) =>
    // 去除字段
    queryInterface.removeColumn('shops', 'address')
};
