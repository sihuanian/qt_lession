'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    const { password, username, email } = ctx.request.body;
    console.log(password, username, email);
    // ctx.throw(400, '用户名或密码没有');
    // ctx.body = { statusCode: 200, mes: '注册成功' };
    // controller -> service -> model
    await ctx.service.user.register({
      password,
      username,
      email,
    });
  }
  async loginIn() {
    const { ctx } = this;
    ctx.body = {
      statusCode: 200,
      mes: '登录成功',
    };
  }
}

module.exports = LoginController;
