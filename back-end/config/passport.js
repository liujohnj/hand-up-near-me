const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const ProviderLogin = mongoose.model("ProviderLogin");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      ProviderLogin.findById(jwt_payload.id)
        .then(provider => {
          if (provider) {
            return done(null, provider);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};