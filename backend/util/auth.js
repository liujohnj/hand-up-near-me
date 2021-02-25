const {db} = require('./db');

module.exports = (req, res, next) =>{
    let idToken;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];
    }
    else{
        console.error('No token found');
        return res.status(403).json({error: 'Unauthorized'});
    }
    //compare idToken to list in database. If there is 


}