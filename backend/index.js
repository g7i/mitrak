import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import controllers from './controllers';
import db from './db';
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/v1', controllers)

db.on('connected', () => {
    console.log('DB connected');
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
