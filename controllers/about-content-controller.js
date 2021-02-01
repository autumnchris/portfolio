const AboutContent = require('../models/about-content');
const Skill = require('../models/skill');

exports.fetchAboutContent = (req, res, next) => {
  AboutContent.findOne({}, 'bio skills -_id').populate({
    path: 'skills',
    select: 'name skillType'
  }).then(data => {
    res.json(data);
  }).catch(error => {
    res.send(error);
  });
}
