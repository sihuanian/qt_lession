import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa';

@Controller
export class MainController {
  @Get('/')
  public async index(@Ctx ctx: Context) {
    console.log(ctx)
    ctx.body = 'hello'
  }

  @Post('/')
  public async index2(@Ctx ctx: Context) {
    ctx.body = 'hello post'
  }
}