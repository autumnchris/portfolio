const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = Schema({
  name: {
    type: String,
    required: true
  },
  skillType: {
    type: String,
    required: true
  }
});

const Skill = mongoose.model('Skill', SkillSchema);

module.exports = Skill;
