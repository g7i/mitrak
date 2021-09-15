import mongoose from 'mongoose';
import db from '../';
import normalize from "normalize-mongoose";
import {urlRegex} from "../../constants/regex";

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        match: [urlRegex, 'Please fill a valid url'],
    },
}, {timestamps: true});

noticeSchema.plugin(normalize);

export default db.model('notices', noticeSchema);
