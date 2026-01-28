import express, { Application } from 'express';
import routes from './routes';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
