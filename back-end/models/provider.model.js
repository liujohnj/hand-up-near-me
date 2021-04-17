const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const providerSchema = new Schema({
  pid: { type: Number },
  username: { type: String },
  password: { type: String },
  name: { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: String },
  latitude: { Number },
  longitude: { Number },
  distanceCrow: { Number },
  phone: { type: String },
  url: { type: String },
  email: { type: String },
  text1: { type: String },
  text2: { type: String },
  imageUrl: { type: String },
  contactName: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
  costFree: { type: Boolean },
  costNA: { type: Boolean },
  costOther: { type: Boolean },
  costReduced: { type: Boolean },
  costSlidingScale: { type: Boolean },
  costVaries: { type: Boolean },
  eveningHours: { type: Boolean },
  weekendHours: { type: Boolean },
  speaksSpanish: { type: Boolean },
  hasAdoption: { type: Boolean },
  hasBurial: { type: Boolean },
  hasChildcare: { type: Boolean },
  hasClothing: { type: Boolean },
  hasCrisisCounseling: { type: Boolean },
  hasDentalCare: { type: Boolean },
  hasDisability: { type: Boolean },
  hasDisaster: { type: Boolean },
  hasDomesticViolence: { type: Boolean },
  hasEducation: { type: Boolean },
  hasElderServices: { type: Boolean },
  hasEmploymentServices: { type: Boolean },
  hasFoodAssistance: { type: Boolean },
  hasHIVServices: { type: Boolean },
  hasImmigration: { type: Boolean },
  hasInfoReferral: { type: Boolean },
  hasMedicalCare: { type: Boolean },
  hasJobTraining: { type: Boolean },
  hasLegalAid: { type: Boolean },
  hasMentalHealth: { type: Boolean },
  hasPregnancyServices: { type: Boolean },
  hasPrescriptionAssistance: { type: Boolean },
  hasShelters: { type: Boolean },
  hasSocialSecurity: { type: Boolean },
  hasSubstanceAbuse: { type: Boolean },
  hasTransportation: { type: Boolean },
  hasUtilities: { type: Boolean },
  hasVeterans: { type: Boolean },
  hasVeterinary: { type: Boolean },
  hasVoterRegistration: { type: Boolean },
  hasVisionCare: { type: Boolean },
}, {
  timestamps: true,
});

providerSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;