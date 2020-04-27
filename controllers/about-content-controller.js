const AboutContent = require('../models/about-content');
const SkillGroup = require('../models/skill-group');

exports.fetchAboutContent = (req, res, next) => {
  AboutContent.findOne({}, 'bio skills -_id').populate({
    path: 'skills',
    select: 'skillTypeName skillList -_id'
  }).then(data => {
    res.json(data);
  }).catch(error => {
    res.send(error);
  });
}
