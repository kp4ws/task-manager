const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

router.route('/api/tasks').get(getAllTasks).post(createTask);
router.route('/api/tasks/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = router;