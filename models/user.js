const mongoose = require('mongoose');

// Create your User Model
const factSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    facts: [factSchema],
    googleId: String
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);
