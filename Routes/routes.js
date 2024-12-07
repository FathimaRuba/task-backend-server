const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/taskController');

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.addTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.toggleTaskCompletion);

module.exports = router;
