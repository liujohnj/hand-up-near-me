const Provider = require("./models/provider.model");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      Provider.findOne({ username: username }, (err, provider) => {
        if (err) throw err;
        console.log("searched for: ", username, " & ", provider);
        if (!provider) {
          console.log("stopping at not found provider");
          return done(null, false);  //incorrect username
        }
        console.log("not stopping!");
        bcrypt.compare(password, provider.password, (err, result) => {
          if (err) throw err;
          console.log("pw = ", password, "& pw = ", provider.password);
          if (result === true) {
            console.log("password match");
            return done(null, provider);
          } else {
            console.log("pw no match");
            return done(null, false);   //incorrect password
          }
        });
      });
    })
  );

  passport.serializeUser((provider, cb) => {
    cb(null, provider.id);
  });
  passport.deserializeUser((id, cb) => {
    Provider.findOne({ _id: id }, (err, provider) => {
      const providerInformation = {
        username: provider.username,
        _id: provider._id
      };
      cb(err, providerInformation);
    });
  });
};