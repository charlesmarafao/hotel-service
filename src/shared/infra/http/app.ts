/* eslint-disable import/prefer-default-export */
import 'reflect-metadata';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import express from 'express';
import cors from 'cors';
import routes from './routes';
import swaggerFile from '../../../docs/swagger.json';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(cors());
app.use(express.json());

app.use(routes);

export { app };
