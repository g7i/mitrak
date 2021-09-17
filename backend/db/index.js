import mongoose from 'mongoose';

const uri = 'mongodb+srv://mitrak:mitrak@mitrak.r0hoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const db = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on('error', (error) => console.log('DB connection failed', error));

db.on('disconnected', () => console.log('DB disconnected'));

export default db;
