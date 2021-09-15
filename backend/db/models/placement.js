import mongoose from 'mongoose';
import db from '../';
import normalize from "normalize-mongoose";
import {urlRegex} from "../../constants/regex";

const placementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    company: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
        match: [urlRegex, 'Please fill a valid url'],
    },
    startAt: {
        type: Date,
        required: true,
    },
    endAt: {
        type: Date,
        required: true,
    },
    document: {
        type: String,
        match: [urlRegex, 'Please fill a valid url'],
    },
    description: {
        type: String,
    },
    package: {
        type: Number,
    },
    requirements: {
        type: [String],
        default: [],
    },
    apply: {
        type: String,
        match: [urlRegex, 'Please fill a valid url'],
    },
}, {timestamps: true});

placementSchema.plugin(normalize);

export default db.model('placements', placementSchema);
