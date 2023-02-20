const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

const getTaskById = async (req, res) => {
    const {id: taskId} = req.params;
    try {
        const task = await Task.findById(taskId);
        if(!task)
        {
            return res.status(404).json({error: 'Task not found'});
        }
        res.status(200).json(task);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

const createTask = async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).json(task);//201 msg?
    } catch(error) {
        res.status(400).json({error: error.message});//400 error msg?
    }
};

const updateTask = async (req, res) => {
    const {id: taskId} = req.params;
    const updateFields = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updateFields.every((update) => allowedUpdates.includes(update));
    if(!isValidOperation)
    {
        return res.status(400).json({error: 'Invalid updates!'});
    }
    try {
        const task = await Task.findById(taskId);
        if(!task) {
            return res.status(404).json({error: 'Task not found!'});
        }
        updateFields.forEach((update) => (task[update] = req.body[update]));
        await task.save();
        res.status(200).json(task);
    } catch(error) {
        res.status(400).json({error: error.message});
    }
};

const deleteTask = async (req, res) => {
    const {id: taskId} = req.params;
    try {
        const task = await Task.findByIdAndDelete(taskId);
        if(!task)
        {
            return res.status(404).json({error: 'Task not found'});
        }
        res.status(200).json(task);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};