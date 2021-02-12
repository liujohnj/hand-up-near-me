const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const providerSchema = new Schema({
  username: { type: String },
  orgName: { type: String },
  website: { type: String },
  url: { type: String },
  zipCode: { type: String },
}, {
  timestamps: true,
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;