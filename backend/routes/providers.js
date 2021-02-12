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
  const orgName = req.body.orgName;
  const website = req.body.website;
  const url = req.body.url;
  const zipCode = req.body.zipCode;

  const newProvider = new Provider({
    username,
    orgName,
    website,
    url,
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
      provider.orgName = req.body.orgName;
      provider.website = req.body.website;
      provider.url = req.body.url;
      provider.zipCode = req.body.zipCode;

      provider.save()
        .then(() => res.json('Provider updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;