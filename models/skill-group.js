const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillGroupSchema = Schema({
  skillTypeName: {
    type: String,
    required: true
  },
  skillList: {
    type: [String],
    required: true
  }
});

const SkillGroup = mongoose.model('SkillGroup', SkillGroupSchema);

module.exports = SkillGroup;
