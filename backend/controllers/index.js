import express from 'express';
import students from './students';
import ping from './ping';

const controllers = express.Router();

controllers.use('/students', students);
controllers.use('/students', students);
controllers.get('/ping', ping);

export default controllers;
