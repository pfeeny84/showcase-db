const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

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


  comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
  },
}, {
  timestamps: true
});
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    showcases: [showcaseSchema],
    googleId: String
}, {
    timestamps: true
  });
  module.exports = mongoose.model('User', userSchema);
