const db = require('../util/db');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userServiceSchema = new Schema({
    user_Id:mongoose.Schema.Types.ObjectId,
    speaksSpanish:false,
    hasAdoption:false,
    hasBurial:false,
    hasChildcare:false,
    hasClothing:false,
    hasCrisisCounseling:false,
    hasDentalCare:false,
    hasDisability:false,
    hasDisaster:false,
    hasDomesticViolence:false,
    hasEducation:false,
    hasElderServices:false,
    hasEmploymentServices:false,
    hasFoodAssistance:false,
    hasHIVServices:false,
    hasImmigration:false,
    hasInfoReferral:false,
    hasMedicalCare:false,
    hasJobTraining:false,
    hasLegalAid:false,
    hasMentalHealth:false,
    hasPregnancyServices:false,
    hasPrescriptionAssisstance:false,
    hasShelters:false,
    hasSocialSecurity:false,
    hasSubstanceAbuse:false,
    hasTransportation:false,
    hasUtilities:false,
    hasVeterans:false,
    hasVeterinary:false,
    hasVoterRegistration:false,
    hasVisionCare:false
}
);

const userService = mongoose.model('userService', userServiceSchema,"userHandsUp");

exports.userService = userService;