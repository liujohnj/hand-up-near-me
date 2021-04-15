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

  const newProvider = new Provider({
    username,
    name,
    address1,
    address2,
    city,
    state,
    zipCode,
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