const mongoose = require('mongoose');

const FrameworkSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  demo: {
    type: String,
    required: true
  },
  sourceCode: {
    type: String,
    required: true
  }
});

const Framework = mongoose.model('Framework', FrameworkSchema);

module.exports = Framework;
