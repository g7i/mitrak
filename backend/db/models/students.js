import mongoose from 'mongoose';
import db from '../';

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    roll: {
        type: String,
        required: true,
        trim: true,
        uppercase: true,
        index: true,
        unique: true,
    },
}, {timestamps: true, _id: false});

export default db.model('students', studentSchema);
