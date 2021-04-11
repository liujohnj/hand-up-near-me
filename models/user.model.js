const db = require('../util/db');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userType: 0,                //0: Public, 1: User, 2: Provider 
    userName: {type:String},
    password: String,
    confirmPassword: String,
    email: {type: String, required: true, unique: true, trim: true, minlength: 5},
    xCoordinates: Number,
    yCoordinates: Number,
    date: {type: Date, default: Date.now},
    imageUrl: "",
    idToken: ""
},{
    timestamps:true
}
);

const userCredentials = new Schema({
    email:{type: String},
    password: String,
    user_Id: mongoose.Schema.Types.ObjectId
},{
    timestamps:true
})
const userCred = mongoose.model('UserCred',userCredentials,"userCredentials");
const User = mongoose.model('User', userSchema,"user");
exports.userCred = userCred;
exports.User = User;