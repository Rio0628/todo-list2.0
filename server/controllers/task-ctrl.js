const Task = require('../models/task-model');

createTask = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({ success: false, error: 'You must provide a task',})
    }

    const task = new Task(body);

    if (!task) { return res.status(400).json({ success: false, error: err }) };

    task.save().then( () => {
        return res.status(201).json({
            success: true,
            id: task._id,
            message: 'Task Created!',
        })
    })
    .catch( error => { return res.status(400).json({ error, message: "Task not created!" }) })
}

updateTask = async (req, res) => {
    const body = req.body;

    if (!body) { return res.status(400).json({ success: false, error: 'You must prive a body to update', }) }

    Task.findOne({ _id: req.params.id }, (err, task) => {
        if (err) { return res.status(404).json({ err, message: 'Task not found!', }) }
        task.name = body.name;
        task.date = body.date; 
        task.type = body.type;
        task.save().then( () => {
            return res.status(200).json({
                success: true,
                id: task._id,
                message: 'Task updated!',
            })
        })
        .catch( error => {
            return res.status(404).json({ error, message: 'Task not updated!', })
        })
    })
}

deleteTask = async (req, res) => {
    await Task.findOneAndDelete({ _id: req.params.id }, (err, task) => {
        if (err) { res.return(400).json({ success: false, error: err }); }
    
        if (!task) { return res.status(404).json({ success: false, error: 'Task not found' }) }

        return res.status(200).json({ success: true, data: task });
    }).catch( err => console.log(err) )
}

getTasks = async (req, res) => {
    await Task.find({}, (err, tasks) => {
        if (err) { return res.status(400).json({ success: false, erorr: err }) };

        if (!tasks.length) { return res.status(404).json({ success: false, error: 'Tasks not found' }) };

        return res.status(200).json({ success: true, data: tasks});
    }).catch( err => console.log(err) )
} 

module.exports = { createTasks, updateTask, deleteTask, getTasks }