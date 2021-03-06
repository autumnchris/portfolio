const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutContentSchema = Schema({
  bio: {
    type: String,
    required: true
  },
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }]
});

const AboutContent = mongoose.model('AboutContent', AboutContentSchema);

module.exports = AboutContent;
