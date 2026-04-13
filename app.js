const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
    { id: 1, title: "do homework", status: "pending" }
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = { 
        id: tasks.length + 1, 
        title: req.body.title,
        status: "Pending" 
    };
    tasks.push(newTask);
    res.send("Task added successfully.");
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    
    if (task) {
        task.title = req.body.title;
        res.send("task updated successfully!");
    } else {
        res.status(404).send("task not found.");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/tasks`);
});