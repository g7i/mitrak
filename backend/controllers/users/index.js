import express from 'express';
import {getUser, listUsers} from './read';
import {createUser, removeUser, updateUser} from './write';

const users = express.Router();

users.get('/', listUsers);
users.get('/:id', getUser);

users.post('/', createUser);
users.patch('/:id', updateUser);
users.delete('/:id', removeUser);

export default users;
