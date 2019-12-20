import * as Koa from 'koa'

import { useControllers } from 'koa-controllers';
 
const app = new Koa();
useControllers(app, __dirname + '/controllers/**/*.controller.js', {
    multipart: { // 自动加载
        dest: './uploads'
    }
});

app.listen(8888)
