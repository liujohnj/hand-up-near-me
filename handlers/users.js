const mongoose = require('mongoose');
var jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

const {validateSignupData, validateLoginData} = require('../util/validators');

const {db} = require('../util/db');
const config = require('../util/config');

const {User,userCred} = require('../models/user.model');
const {userService} = require('../models/userServices.model');

// Requests username, email, password, and confirm password
exports.userSignup = (req, res) =>{
    const userName = req.body.userName;
    const email = req.body.email;

    const newUser = new User({
        userType : 1,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    });


    const { valid , errors } = validateSignupData(newUser);
    if(!valid) return res.status(400).json(errors);

    var id;
    
    User.findOne({'email':email},function(err,found){
        if(err) return res.status(400).json(errors);
        if(found!= null){
            id = found._id;
            return res.status(400).json("Error: email is already in use!");
        }
        else{
            User.findOne({'userName':userName},function(err,found2){
                if(err) return res.status(400).json(errors);
                if(found2!= null){
                id = found2._id;
                return res.status(400).json("Error: username is already in use!");
                }
                else{
                    
                    newUser.save()
                    .then(()=>User.findOne({'email':email},function(err,found){
                        if(found != null){
                        id = found._id;
                        const userCredentials = new userCred({
                            email: newUser.email,
                            createdAt: new Date().toISOString(),
                            user_Id: id
                        });
                        userCredentials.save()
                        
                        const newUserServices = new userService({
                            user_Id: id,
                            createdAt: new Date().toISOString(),
                        })
                        console.log(newUserServices._id);
                        console.log(id);
                        console.log(newUserServices.user_Id);
                        newUserServices.save()

                        .then(()=>{ return res.status(201).json('User added!')})
                        }
                        else{
                            return res.status(400).json('Not found');
                        }
                        }))
                            
                    .catch(err =>res.status(400).json('Error: '+ err));
                }
            
            })
        }
    }
    )
};



// User Login / Create in CRUD
// Return id, userName, email, accessToken
exports.userLogin = (req, res) =>{
    const userName = req.body.userName;
    const password = req.body.password;
    const user = {
        userName: userName,
        password: req.body.password
      };
    const { valid , errors } = validateLoginData(user);

    User.findOne({'userName':userName},function(err,found){
        if(err) return res.status(400).json(errors);
        if(found== null){
            return res.status(404).json('User not found.');
        } 
        else{ 
            if(password != found.password){
                return res.status(400).json({
                    message:'Incorrect password',
                    accessToken: null
                });
            }
            var token = "Bearer " + jwt.sign({id: user._id},config.secret,{
                expiresIn: 86400
            });
            return res.status(200).send({ 
                id: found._id,
                userName:found.userName,
                email: found.email,
                accessToken: token
            });
        }
    })
};


// Read in CRUD
// Return all of the userid parameters
exports.userRead = (req, res) =>{
    const user = {
        _id : req.body._id
      };

    User.findOne({'_id':user._id},function(err,found){
        if(err) return res.status(400).json(errors);
        if(found== null){
            return res.status(404).json('User not found.');
        } 
        else{ 
            return res.status(200).send(found);
        }
    })
};


// Update in CRUD
// Return Update Status
exports.userUpdate = (req, res) =>{

    const id = req.body._id;
    const filter = { "_id": id};
    var toUpdate ={
        xCoordinates: req.body.xCoordinates,
        yCoordinates: req.body.yCoordinates,
        imageUrl: req.body.imageUrl,
        idToken: req.body.idToken,
        password: req.body.password,
        confirmPassword: req.body.password,
        email: req.body.email,
        imageUrl: req.body.imageUrl,
        idToken: req.body.idToken
    };

    User.updateOne(filter, toUpdate,{new:true, upsert:true, useFindAndModify: false},function(err,found){
        if(err) {
            return res.status(400).json(err);
        }
        else{
            return res.status(201).send('Succesfully saved.');
        }
    });
};

// Update in CRUD
// Return success status
exports.userUpdateServices = (req, res) =>{
    const id = req.body._id;
    const filter = { "user_Id": id};
    var toUpdate = req.body;
    toUpdate.user_Id = id;
    User.updateOne(filter, toUpdate,{new:true, upsert:true, useFindAndModify: false},function(err,found){
        if(err) {
            return res.status(400).json(err);
        }
        else{
            return res.status(201).send('Succesfully saved.');
        }
    });
}

// Delete in CRUD
// Return delete status
exports.userDelete = (req, res) =>{
    User.deleteOne({
        _id : req.body._id
    }, function(err,found){
        if(err){
            return res.status(400).json(err);
        }
        else{
            return res.status(201).send('Deleted successfully');
        }
    })
}


/* Requests:
        userEmail,
        userPassword,
        from,
        to,
        subject,
        text
    Response:
        Success / Error code

    TBD: Mailchimp API. 
    Need to set up correct credentials and domain (paywall). 
    Currently using pre-existing email addresses.

*/
exports.sendEmail = (req, res) =>{
    let transport = nodemailer.createTransport(options,[ defaults]);
    let transport = nodemailer.createTransport({
        host:`smtps://${req.userEmail}:${req.userPassword}@smtp.gmail.com`
//        port: 587,
//       secure: false,
//        auth:{
//            user: "",
//            pass: ""
        //}
    })
        transport.verify(function(error, success){
            if(error){
                console.log(error);
                return  res.status(400).json(err);
            }
            else{
                console.log("Server is ready");
            }
        })

        const message = {
            from: req.body.from,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,
            html:'<b>Help requested from HandsUpNearMe</b>'
        };

        transport.sendMail(message, function(err, info){
            if(err){
                console.log(err);
                return res.status(400).json(err);
            }
            else{
                console.log(info);
            }
        }
        )
    
}