import Koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import path from 'path';
import { createReadStream } from 'fs';
const __dirname = path.resolve();

import Router from 'koa-router';
const staticDirPath = path.join(__dirname, '/frontend');

const app = new Koa();
const ui = new Koa();

const router = new Router();

const port = process.env.PORT || 3001;

app.use(logger());

router.get('/api', async (ctx) => {
  ctx.body = 'Hello API!';
});

app.use(serve(__dirname + '/frontend'));

router.all('(.*)', async (ctx, next) => {
  ctx.type = 'html';
  ctx.body = createReadStream(__dirname + '/frontend/index.html');
});

app.use(router.routes());

app.listen(port);
console.log(`Running on port ${port}`);
