import Koa from 'koa';
import helmet from "koa-helmet";
import cors from "@koa/cors";
import winston from "winston";
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import { config } from './config';
import { logger } from "./logger";


const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = "Hello world";
})

// Provides important security headers to make your app more secure
app.use(helmet());
// Enable cors with default options
app.use(cors());
// Logger middleware -> use winston as logger (logging.ts with config)
app.use(logger(winston));
// Enable bodyParser with default options
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.port);

console.log(`[SAKURA] Server running on port ${config.port}`);