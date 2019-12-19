'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: '用户id' // 描述
      },
      username: {
        type: Sequelize.STRING(50),
        unique: true, // 唯一索引
        allowNull: false,
        defaultValue: '',
        comment: '用户名'
      },
      password: {
        type: Sequelize.STRING(32),
        allowNull: false,
        defaultValue: '',
        comment: '用户密码'
      },
      disabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        comment: '是否是禁用状态'
      },
      createdIpAt: {
        type: Sequelize.STRING(15),
        allowNull: false,
        field: 'created_ip_at',
        defaultValue: '',
        comment: '用户注册的ip'
      },
      mobile: {
        type: Sequelize.STRING(12), //定长的时候就用CHAR类型
        unique: true,
        allowNull: false,
        defaultValue: '',
        comment: '手机号码'
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        defaultValue: '',
        comment: '邮箱'
      },
      updatedIpAt: {
        type: Sequelize.STRING(15),
        allowNull: false,
        field: 'updated_ip_at',
        defaultValue: '',
        comment: '用户最新一次登录的ip'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        comment: '用户注册时间'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        comment: '用户最新一次登录的时间'
      }
    }, {
      tableName: 'user',
      charset: 'utf8mb4',
      collate: 'utf8mb4_bin',
      indexes: []
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('user');
  }
};
