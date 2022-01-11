const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://mariomdomenech:Mariofto700.@newcluster.a2laf.mongodb.net/Todo-List2`, { useNewUrlParser: true }).catch( e => console.error('Connection error', e.message) );

const db = mongoose.connection;
module.exports = db;

console.log('mario')