const {connection, connect} = require('mongoose');
require('dotenv').config();


const DB_URL = process.env.DB_URL;

connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await connect(DB_URL);
}

module.exports = {
    mongoConnect,
}