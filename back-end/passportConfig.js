const Provider = require('./models/provider.model');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport) {

    passport.use(
        new localStrategy((username, password, done) => {
            Provider.findOne({username: username}, (err,provider) => {
            if (err) throw err;
            if (!provider) return done(null, false);
            console.log(`password = ${password} ... ${provider.password}`)
            bcrypt.compare(password, provider.password, (err, result) => {
                if (err) throw err;
                if (result === true) {
                    return done(null, provider);
                    //console.log(`inside ... ${provider}`);
                    } else {
                        return done(null, false);
                    };
                });
                //console.log(`outside ... ${provider}`);
            });
        })
    );
    
    passport.serializeUser((provider,cb) => {
        cb(null, provider.id);
    });

    passport.deserializeUser((id, cb) => {
        Provider.findOne({ _id: id}, (err, provider) => {
            const providerInformation = {
                username: provider.username
            };
            cb(err, providerInformation);
        });
    });
};