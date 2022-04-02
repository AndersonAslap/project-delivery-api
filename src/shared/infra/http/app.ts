import 'reflect-metadata';
import '../../container';
import "express-async-errors";
import express from "express";
import { routes } from './routes';
import { exceptionsErrorMiddleware } from './middlewares/exceptionsErrorMiddleware';

const app = express();

app.use(express.json());

app.use(routes);

app.use(exceptionsErrorMiddleware);

export { app };
