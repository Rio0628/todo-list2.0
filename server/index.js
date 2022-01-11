require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const db = require('./db');
const taskRouter = require('./routes/task-router');
const app = express();
const apiPort = process.env.apiPort || 3000; // New Line

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => { res.send('Hello World!') });
app.use('/api', taskRouter);

if (process.env.NODE_ENV === 'production') { // New Line
    app.use(express.static('../build'))
}

console.log(process.env.DB_PASSWORD)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))