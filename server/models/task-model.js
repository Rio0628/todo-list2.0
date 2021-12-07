const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const Task = new Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    type: { type: String, required: true },
}, { timestamps: true }, );

module.exports = mongooose.model('tasks', Task);