const router = require('express').Router();
let Provider = require('../models/provider.model');


router.route('/list').get((req, res) => {
  console.log("Trying to get providers from routes!");
  Provider.find()
    .then(providers => res.json(providers))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
  console.log("Trying to add a provider from routes!");
  const username = req.body.username;
  const name = req.body.name;
  const address1 = req.body.address1;
  const address2 = req.body.address2;
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;
  const text = req.body.text;
  const text2 = req.body.text2;
  const username = req.body.username;
  const password = req.body.password;
  const latitude = req.body.latitute;
  const longitude = req.body.longitude;
  const distanceCrow = req.body.distanceCrow;
  const phone = req.body.phone;
  const url = req.body.url;
  const email = req.body.email;
  const imageUrl = req.body.imageUrl;
  const hasAdoption = req.body.hasAdoption;
  const hasChildcare = req.body.hasChildcare;
  const hasClothing = req.body.hasClothing;
  const hasCrisisCounseling = req.body.hasCrisisCounseling;
  const hasDentalCare = req.body.hasDentalCare;
  const hasDisability = req.body.hasDisability;
  const hasEducation = req.body.hasEducation;
  const hasElderServices = req.body.hasElderServices;
  const hasEmploymentServices = req.body.hasEmploymentServices;
  const hasFoodAssistance = req.body.hasFoodAssistance;
  const hasHIVServices = req.body.hasHIVServices;
  const hasImmigration = req.body.hasImmigration;
  const hasInfoReferral = req.body.hasInfoReferral;
  const hasMedicalCare = req.body.hasMedicalCare;
  const hasLegalAid = req.body.hasLegalAid;
  const hasMentalHealth = req.body.hasMentalHealth;
  const hasPregnancyServices = req.body.hasPregnancyServices;
  const hasPrescriptionAssistance = req.body.hasPrescriptionAssistance;
  const hasShelters = req.body.hasShelters;
  const hasSubstanceAbuse = req.body.hasSubstanceAbuse;
  const hasTransportation = req.body.hasTransportation;
  const hasVeterans = req.body.hasVeterans;
  const hasVeterinary = req.body.hasVeterinary;
  const hasVoterRegistration = req.body.hasVoterRegistration;
  const hasVisionCare = req.body.hasVisionCare;
  const hasOther = req.body.hasOther;

  const newProvider = new Provider({
    username,
    name,
    address1,
    address2,
    city,
    state,
    zipCode,
    text,
    text2,
    username,
    password,
    latitute,
    longitude,
    distanceCrow,
    phone,
    url,
    email,
    imageUrl,
    hasAdoption,
    hasChildcare,
    hasClothing,
    hasCrisisCounseling,
    hasDentalCare,
    hasDisability,
    hasEducation,
    hasElderServices,
    hasEmploymentServices,
    hasFoodAssistance,
    hasHIVServices,
    hasImmigration,
    hasInfoReferral,
    hasMedicalCare,
    hasLegalAid,
    hasMentalHealth,
    hasPregnancyServices,
    hasPrescriptionAssistance,
    hasShelters,
    hasSubstanceAbuse,
    hasTransportation,
    hasVeterans,
    hasVeterinary,
    hasVoterRegistration,
    hasVisionCare,
    hasOther
  });

  newProvider.save()
  .then(() => res.json('Provider added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Provider.findById(req.params.id)
    .then(provider => res.json(provider))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Provider.findByIdAndDelete(req.params.id)
    .then(() => res.json('Provider deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Provider.findById(req.params.id)
    .then(provider => {
      provider.username = req.body.username;
      provider.name = req.body.name;
      provider.address1 = req.body.address1;
      provider.address2 = req.body.address2;
      provider.city = req.body.city;
      provider.state = req.body.state;
      provider.zipCode = req.body.zipCode;
      provider.text = req.body.text;
      provider.text2 = req.body.text2;
      provider.username = req.body.username;
      provider.password = req.body.password;
      provider.latitude = req.body.latitute;
      provider.longitude = req.body.longitude;
      provider.distanceCrow = req.body.distanceCrow;
      provider.phone = req.body.phone;
      provider.url = req.body.url;
      provider.email = req.body.email;
      provider.imageUrl = req.body.imageUrl;
      provider.hasAdoption = req.body.hasAdoption;
      provider.hasChildcare = req.body.hasChildcare;
      provider.hasClothing = req.body.hasClothing;
      provider.hasCrisisCounseling = req.body.hasCrisisCounseling;
      provider.hasDentalCare = req.body.hasDentalCare;
      provider.hasDisability = req.body.hasDisability;
      provider.hasEducation = req.body.hasEducation;
      provider.hasElderServices = req.body.hasElderServices;
      provider.hasEmploymentServices = req.body.hasEmploymentServices;
      provider.hasFoodAssistance = req.body.hasFoodAssistance;
      provider.hasHIVServices = req.body.hasHIVServices;
      provider.hasImmigration = req.body.hasImmigration;
      provider.hasInfoReferral = req.body.hasInfoReferral;
      provider.hasMedicalCare = req.body.hasMedicalCare;
      provider.hasLegalAid = req.body.hasLegalAid;
      provider.hasMentalHealth = req.body.hasMentalHealth;
      provider.hasPregnancyServices = req.body.hasPregnancyServices;
      provider.hasPrescriptionAssistance = req.body.hasPrescriptionAssistance;
      provider.hasShelters = req.body.hasShelters;
      provider.hasSubstanceAbuse = req.body.hasSubstanceAbuse;
      provider.hasTransportation = req.body.hasTransportation;
      provider.hasVeterans = req.body.hasVeterans;
      provider.hasVeterinary = req.body.hasVeterinary;
      provider.hasVoterRegistration = req.body.hasVoterRegistration;
      provider.hasVisionCare = req.body.hasVisionCare;
      provider.hasOther = req.body.hasOther;

      provider.save()
        .then(() => res.json('Provider updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/search').get((req, res) => {
  console.log("Trying to search providers from routes!");
  Provider.find()
    .then(providers => res.json(providers))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;