import mongoose from 'mongoose';
import normalize from 'normalize-mongoose';
import db from '../';
import {urlRegex} from "../../constants/regex";

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        default: 'https://images.static-collegedunia.com/public/college_data/images/appImage/14351_MITRC_New.jpg',
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    links: [{
        title: {
            type: String,
        },
        url: {
            type: String,
            match: [urlRegex, 'Please fill a valid url'],
        },
    }],
}, {timestamps: true});

newsSchema.plugin(normalize);

export default db.model('news', newsSchema);
