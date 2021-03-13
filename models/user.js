const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    showcase: {
        type: Schema.Types.ObjectId,
        ref: 'Showcase'
    },
    googleId: String
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('User', userSchema);
