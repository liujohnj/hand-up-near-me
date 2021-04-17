const router = require('express').Router();
const passport = require('passport')

router.post('/login', passport.authenticate('local'), (req, res) => {
  // login is successful!
  res.status(200).json(req.user);
})

router.get('/me', (req, res) => {
  if (!req.user) {
    res.status(401)
    return
  }
  res.status(200).json(req.user);
})

module.exports = router
