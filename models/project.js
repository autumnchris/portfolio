const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
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
  frameworks: [{ type: Schema.Types.ObjectId, ref: 'Framework' }],
  date: {
    type: Number,
    required: true
  }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
