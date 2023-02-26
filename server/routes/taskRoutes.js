const express = require('express');
const router = express.Router();
const cors = require('cors');

const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

router.use(cors());
router.route('/api/tasks').get(getAllTasks).post(createTask);
router.route('/api/tasks/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

module.exports = router;