const passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;
const Provider = require('./provider.model');

passport.use(new LocalStrategy(
  function(username, password, done) {
    Provider.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
))

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  Provider.findById(id, "-password", (err, res) => {
    if (err) {
      done(err);
    } else {
      if (res && res.id === id) {
        done(null, res.toObject({ virtuals: true }));
      } else {
        done(null, false);
      }
    }
  });
});
