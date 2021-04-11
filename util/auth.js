const {db} = require('./db');
const jwt = require('jsonwebtoken');
const config = require('./config');
const { ReactComponent } = require('*.svg');

module.exports = (req, res, next) =>{
    let idToken;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];

        jwt.verify(idToken, config.secret,(err,decoded)=>{
                if(err){
                    return res.status(401).send({message: "Unauthorized!"});
                }
                req.body.userId = decoded.id;
                return res.status(201).send({idToken});
        })
    }
    else{
        console.error('No token found');
        return res.status(403).json({error: 'No token provided'});
    }
    //compare idToken to list in database. If there is 


}