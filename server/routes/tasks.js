const express = require('express');
const router = express.Router();

//Get all tasks
router.get('/tasks', (req, res) => {
    res.send('Get all tasks');
});

//Get a single task
router.get('/tasks/:id', (req, res) => {
    res.send(`Get task with param ${req.params.id}`);
});

//Create a new task
router.post('/tasks', (req, res) => {
    res.send('Create a new task');
});

//Update a task
router.patch('/tasks/:id', (req, res) => {
    res.send(`Update task with id ${req.params.id}`);
});

//Delete a task
router.delete('/tasks/:id', (req, res) => {
    res.send(`Delete task with the id ${req.params.id}`);
});

module.exports = router;