const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

//Get all tasks
router.get('/tasks', taskController.getAllTasks);
//Get a single task
router.get('/tasks/:id', taskController.getTaskById);
//Create a new task
router.post('/tasks', taskController.createTask);
//Update a task
router.patch('/tasks/:id', taskController.updateTask);
//Delete a task
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;