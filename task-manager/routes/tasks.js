const express = require('express');
const router = express.Router();

// calls getAllTasks function from tasks controller
const {getAllTasks} = require('../controllers/tasks')

router.route('/').get(getAllTasks);


module.exports = router;