const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;