import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import send from 'koa-send';

import Router from 'koa-router';

const app = new Koa();

const router = new Router();

const port = process.env.PORT || 3001;

app.use(logger());

router.get('/api', async (ctx) => {
  ctx.body = 'Hello API!';
});

app.use(serve('./frontend'));

app.use(router.routes());

app.listen(port);
console.log(`Running on port ${port}`);
