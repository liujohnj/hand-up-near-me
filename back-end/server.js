const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }  //make heroku happy??
//mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true, useCreateIndex: true }  //make heroku happy??
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})


const providersRouter = require('./routes/providers');
app.use('/providers', providersRouter);
//THE ABOVE APP.USE STATEMENT MUST MUST MUST GO BEFORE THE BELOW OR GET JSON PARSING ERROR

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