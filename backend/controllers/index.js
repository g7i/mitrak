import express from 'express';
import users from './users';
import ping from './ping';
import news from "./news";
import uploadURL from "./uploadURL";

const controllers = express.Router();

controllers.use('/users', users);
controllers.use('/news', news);
controllers.get('/ping', ping);
controllers.post('/upload', uploadURL);

export default controllers;
