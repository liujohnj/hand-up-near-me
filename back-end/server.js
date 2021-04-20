const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// for authentication
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser =require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');

// How did this work before without it???
const Provider = require('./models/provider.model');

//require('./models/authentication');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//-------------------------------- END OF IMPORTS ------------------------------

// Mongoose connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }  //make heroku happy??
//mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true }  //make heroku happy??
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})



// Middleware
//app.use(bodyParser.json());                       //deprecated
//app.use(bodyParser.urlencoded({extended: true})); //deprecated
app.use(express.urlencoded({extended: true}));      //alternate

//app.use(cors());            //pre-authentication
app.use(cors({
    origin: ["http://localhost:3000", 'https://cen-3031.herokuapp.com/'], // <-- location of react app being connected to; CHANGE FOR HEROKU???!!!
    credentials: true
}));

app.use(express.json());

app.use(
    session({
        secret: "thecen3031secret",
        cookie: {
            maxAge: 28800000  //8 hours
        },
        saveUninitialized: true,
        resave: true
    })
);
app.use(passport.initialize())

app.use(cookieParser("thecen3031secret"));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

//-------------------------------- END OF MIDDLEWARE ------------------------------

const providersRouter = require('./routes/providers');
app.use('/providers', providersRouter);
//THE ABOVE APP.USE STATEMENT MUST MUST MUST GO BEFORE THE BELOW CATCH-ALL OR GET JSON PARSING ERROR

//Routes
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err,provider,info) => {
        console.log(provider);
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
        console.log("hello");
        if (err) throw err;
        if (doc) res.send(`Provider already exists`);
        if (!doc) {
            console.log("about to hash");
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            console.log("new hashed pw = ", hashedPassword);
           
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
    console.log(req.user);
    res.send(req.user); // The req.user stores the entire use that has been authenticated inside of it.
});


//for heroku production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../front-end/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../front-end', 'build', 'index.html'));
    })
} else {
    app.get('/', (req, res) => {
        res.send("API running");
    });
}


/*
app.get("/", (req, res) => {
    res.redirect('/search');     //make heroku happy???
});
*/

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});