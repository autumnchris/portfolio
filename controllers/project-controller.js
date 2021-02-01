const Project = require('../models/project');
const Framework = require('../models/framework');

exports.fetchProjects = (req, res, next) => {
  Project.find({}, 'title description icon frameworks').populate({
    path: 'frameworks',
    select: 'name demo sourceCode',
    options: {
      sort: {
        name: 'asc'
      }
    }
  }).sort({
    date: 'desc'
  }).then(data => {
    res.json(data);
  }).catch(error => {
    res.send(error);
  });
}
