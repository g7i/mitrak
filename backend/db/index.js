import mongoose from 'mongoose';

const uri = 'mongodb+srv://mitrak:mitrak@mitrak.r0hoe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const db = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

db.on('error', (error) => {
    console.log('DB connection failed', error);
    db.close().catch(() =>
        console.log(`DB failed to close connection ${this.name}`)
    );
});

db.on('disconnected', () => {
    console.log('DB disconnected');
});

export default db;
