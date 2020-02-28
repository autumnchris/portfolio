const express = require('express');
const projectController = require('../controllers/project-controller');
const router = express.Router();

router.get('/projects', projectController.fetchProjects);

module.exports = router;
