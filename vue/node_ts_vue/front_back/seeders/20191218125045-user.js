'use strict';

const md5 = require('md5')
const moment = require('moment')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('user', [
      {
        id: 1,
        username: 'sihuanain',
        password: md5('123456'),
        disabled: false,
        mobile: '12345678911',
        email: '666666@qq.com',
        created_ip_at: '127.0.0.1',
        updated_ip_at: '127.0.0.1',
        created_at: moment().format('YYYY-MM-DD', 'HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD', 'HH:mm:ss')
      },
      {
        id: 2,
        username: 'cj',
        password: md5('123456'),
        disabled: false,
        mobile: '15879958220',
        email: '6666666@qq.com',
        created_ip_at: '127.0.0.1',
        updated_ip_at: '127.0.0.1',
        created_at: moment().format('YYYY-MM-DD', 'HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD', 'HH:mm:ss')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
