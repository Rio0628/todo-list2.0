const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.REACT_APP_DB_USERNAME}:${process.env.REACT_APP_DB_PASSWORD}@newcluster.a2laf.mongodb.net/Todo-List2?retryWrites=true&w=majority`, { useNewUrlParser: true }).catch( e => console.error('Connection error', e.message) );

const db = mongoose.connection;
module.exports = db;
