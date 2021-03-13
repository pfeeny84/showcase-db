const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: String,
    rating: {
        type: Number, 
        min: 1, 
        max: 5, 
        default: 5
    }
  
}, {
    timestamps: true
  });

  module.exports = mongoose.model('Comment', commentSchema);