const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./db');
const taskRouter = require('./routes/task-router');
const app = express();
const apiPort = process.env.PORT || 3000; // New Line
const buildPath = path.join(__dirname, './', 'build');

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

console.log(process.env.DB_PASSWORD)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))