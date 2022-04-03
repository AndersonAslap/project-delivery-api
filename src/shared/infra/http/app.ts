import 'reflect-metadata';
import '../../container';
import "express-async-errors";
import express from "express";
import { routes } from './routes';
import { ensureExceptionsError } from './middlewares/ensureExceptionsError';

const app = express();

app.use(express.json());

app.use(routes);

app.use(ensureExceptionsError);

export { app };
