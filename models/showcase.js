const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const showcaseSchema = new mongoose.Schema({
    text: String,
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    },
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Showcase', showcaseSchema);