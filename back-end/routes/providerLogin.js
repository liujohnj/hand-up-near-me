const router = require('express').Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let ProviderLogin = require('../models/providerLogin.model');

router.route("/register").post((req, res) => {
    ProviderLogin.findOne({email: req.body.email}).then(provider => {
        if (provider) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newProvider = new ProviderLogin({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newProvider.password, salt, (err, hash) => {
                  if (err) throw err;
                  newProvider.password = hash;
                  newProvider
                    .save()
                    .then(provider => res.json(provider))
                    .catch(err => console.log(err));
                });
            });
        }
    });
});

router.route("/login").post((req, res) => {  
    const email = req.body.email;
    const password = req.body.password;
  
    ProviderLogin.findOne({ email }).then(provider => {
      if (!provider) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  
      bcrypt.compare(password, provider.password).then(isMatch => {
        if (isMatch) {
            const payload = {
                id: provider.id,
                name: provider.name
            };
  
            jwt.sign(payload, "secret", { expiresIn: 31556926 }, (err, token) => {
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
            });
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  module.exports = router;