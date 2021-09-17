import express from 'express';
import users from './users';
import ping from './ping';
import news from "./news";

const controllers = express.Router();

controllers.use('/users', users);
controllers.use('/news', news);
controllers.get('/ping', ping);

export default controllers;
