const {user, db} = require('../util/db');

const config = require('../util/config');

let newUserInfo = require('../models/user.model')

const {validateSignupData, validateLoginData, reduceUserDetails} = require('../util/validators');

exports.userSignup = (req, res) =>{
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.password,
        userId: req.body.userId
    };

    const {valid, errors} = validateSignupData(newUser);
    
    if(!valid) return res.status(400).json(errors);

    const noImg = 'no-img.png'

    let token, userId;

    user.findOne( {_id:req.body.userId}, function(result,err){
        if(result){
            return res.status(400).json({error: 'This id is already taken.'});
        }
        else{
            return user.insertOne(newUser);
        }
    })
    .then((data)=>{
        userId = data.user.userId;
    })
    .catch(err =>res.status(400).json('Error: '+ err))

};

exports.userLogin();

exports.userUploadImage();

exports.userAddDetails();

exports.userGetAuthentication();