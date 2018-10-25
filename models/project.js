const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  },
  frameworks: [{}],
  order: {
    type: Number,
    required: true,
    unique: true
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
