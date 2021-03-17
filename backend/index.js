const app = require('express')();
const Auth = require('./util/auth.js');
const config = require('./util/config.js');


//Database setup
//var mongoose = require("mongoose");
//const uri = config.databaseURI;
//mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true})
//const database = mongoose.connection;
//database.once('open', () =>{
 //   console.log("MongoDB database connection established successfully");
//})



///const{getProvider, getAllProvider, postHandsUp} = require('./handlers/handsUp.js');
//const{ providerSignup, providerLogin, providerUploadImage, providerAddDetails, providerGetAuthentication} = require('./handlers/providers.js');
//const{ userSignup, userLogin, userUploadImage, userAddDetails, userGetAuthentication} = require('./handlers/users.js');
const{ userSignup} = require('./handlers/users.js');

//HandsUp route
//app.post('/handsUp', postHandsUp);
//app.get('/allProviders', getAllProvider);
//app.get('/provider/:providerId', getProvider);

//Provider route
////app.post('/provider/signup', providerSignup);
//app.post('/provider/login', providerLogin);
//app.post('/provider/Image', providerUploadImage, Auth);
//app.post('/provider', providerAddDetails, Auth);
//app.get('/provider', providerGetAuthentication, Auth);

//User Route
app.post('/user/signup', userSignup);
//app.post('/user/login', userLogin);
//app.post('/user/Image', userUploadImage, Auth);
//app.post('/user', userAddDetails, Auth);
//app.get('/user', userGetAuthentication, Auth);


//exports.api = functions.https.onRequest(app);