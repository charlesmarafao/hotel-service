/* eslint-disable import/prefer-default-export */
import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

export { app };
