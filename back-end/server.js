const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const session = require("express-session")
const passport = require('passport')
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
//const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const Provider = require('./models/provider.model');
const bcrypt = require('bcrypt')

require('./models/authentication');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//-------------------------------- END OF IMPORTS ------------------------------

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log(`MongoDB database connection established successfully`);
})


//Middleware

/* deprecated
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
*/
app.use(express.urlencoded({extended: true}));  //alternate

app.use(cors({
    origin: "http://localhost:3000", // <-- location of react app being connected to
    credentials: true
}));
app.use(express.json());

app.use(
    session({
        //secret: "1234hufaflhfsdakljflkj",
        secret: "cen3031secret",
        //cookie: {
        //    maxAge: 86400000,
        //},
        saveUninitialized: true,
        resave: true
    })
);
app.use(passport.initialize())


//app.use(cookieParser("1234hufaflhfsdakljflkj"))
app.use(cookieParser("cen3031secret"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

//-------------------------------- END OF MIDDLEWARE ------------------------------

const providersRouter = require('./routes/providers');
//const authRouter = require('./routes/auth');

//app.use('/auth', authRouter);
app.use('/providers', providersRouter);

//Routes
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err,provider,info) => {
        if (err) throw err;
        if (!provider) res.send(`No provider exists`)
        else {
            req.login(provider, (err) => {
                if (err) throw err;
                res.send(`Successfully Authenticated`);
            });
        }
    })(req, res, next);  // req.provider stores entire provider that has been authenticated inside of it
});

app.post("/register", (req, res) => {
    Provider.findOne({username: req.body.username}, async (err,doc) => {
        if (err) throw err;
        if (doc) res.send(`Provider already exists`);
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
           
            const newProvider = new Provider({
                username: req.body.username,
                password: hashedPassword
            });
            await newProvider.save();
            res.send(`Provider created`);
        }
    })
});

app.get("/user", (req, res) => {
    res.send(req.provider); // The req.user stores the entire use that has been authenticated inside of it.
    /*
    Provider.findOne({username: req.body.username}, (err,doc) => {
        if (err) throw err;
        if (doc) res.send(`User exists`);
    })
    */
   console.log(`can we see info?: ${req.provider} ... or not`)
});


// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});