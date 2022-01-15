require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./server/db');
const taskRouter = require('./server/routes/task-router');
const app = express();
const apiPort = process.env.PORT || 3001; 
const buildPath = path.join(__dirname,'build');

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => { res.send('Hello World!') });
app.use('/api', taskRouter);

app.use(express.static(buildPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))