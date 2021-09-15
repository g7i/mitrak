import express from 'express';
import users from './users';
import ping from './ping';

const controllers = express.Router();

controllers.use('/users', users);
controllers.get('/ping', ping);

export default controllers;
