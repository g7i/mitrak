import express from 'express';
import {getNews, listNews} from './read';
import {createNews, removeNews, updateNews} from './write';

const news = express.Router();

news.get('/', listNews);
news.get('/:id', getNews);

news.post('/', createNews);
news.patch('/:id', updateNews);
news.delete('/:id', removeNews);

export default news;
