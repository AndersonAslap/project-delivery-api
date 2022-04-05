import 'reflect-metadata';
import '../../container';
import "express-async-errors";
import express from "express";
import { routes } from './routes';
import { ensureExceptionsError } from './middlewares/ensureExceptionsError';
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./doc/swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(routes);

app.use(ensureExceptionsError);

export { app };
