const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
    content: String,
    
    
}, {
    timestamps: true
  });

  const showcaseSchema = new mongoose.Schema({
    text: String,

    headliner:{
        type: String,
        required:true,
    },

    tour: String,
    openingActs: String,
    venue: String,
    date: Date,
    

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    comments: [commentSchema],
  }, 
  
  {
    timestamps: true
  });

  module.exports = mongoose.model('Showcase', showcaseSchema);