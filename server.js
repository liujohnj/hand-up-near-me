const express = require('express');
const cors = require('cors');
const router = require('express').Router();


const {db} = require('./util/db.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//Connect to Database
db.once("open", ()=>{
    console.log("CONNECTED!");
})

//User handler
const {userSignup, userUpdate, userLogin} = require('./handlers/users');

app.post("/users/signUp",userSignup);
app.post("/users/update",userUpdate);
app.post("/users/login",userLogin);

//Start app
app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});

