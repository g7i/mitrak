import mongoose from 'mongoose';
import db from '../';
import {contactRegex, emailRegex, urlRegex} from "../../constants/regex";
import normalize from "normalize-mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: [emailRegex, 'Please fill a valid email address'],
    },
    id: {
        type: Number,
        trim: true,
        index: true,
        unique: true,
        uppercase: true,
        required: true,
    },
    roll: {
        type: String,
        trim: true,
        uppercase: true,
    },
    contact: {
        type: Number,
        match: [contactRegex, 'Please fill a valid contact'],
    },
    image: {
        type: String,
        match: [urlRegex, 'Please fill a valid url'],
    },
    sem: {
        type: Number,
        enum: Array.from(Array(8), (_,x) => x + 1),
        default: 7,
    },
    batch: {
        type: String,
        enum: ['A', 'B', 'C'],
        default: 'A'
    },
    branch: {
        type: String,
        enum: ['CSE', 'CE', 'ME'],
        default: 'CSE'
    },
    role: {
        type: String,
        enum: ['admin', 'student', 'mentor'],
        default: 'student'
    }
}, {timestamps: true});

userSchema.plugin(normalize);

export default db.model('users', userSchema);
