const express = require('express');
const aboutContentController = require('../controllers/about-content-controller');
const projectController = require('../controllers/project-controller');
const router = express.Router();

router.get('/about-content', aboutContentController.fetchAboutContent);
router.get('/projects', projectController.fetchProjects);

module.exports = router;
