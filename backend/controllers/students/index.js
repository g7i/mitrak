import express from 'express';
import {getStudent, listStudents} from './read';
import {createStudent, removeStudent, updateStudent} from './write';

const students = express.Router();

students.get('/', listStudents);
students.get('/:roll', getStudent);

students.post('/', createStudent);
students.patch('/:roll', updateStudent);
students.delete('/:roll', removeStudent);

export default students;
