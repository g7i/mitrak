import express from 'express';
import db from './db';
import controllers from './controllers';
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', controllers)

db.on('connected', () => {
    console.log('DB connected');
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});
