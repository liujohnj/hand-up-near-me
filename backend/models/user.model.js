const db = require('../util/db');


const userSchema = ({
    name: String,
    password: String,
    email: {type: String, required: true, unique: true, trim: true, minlength: 5},
    xCoordinates: Number,
    yCoordinates: Number,
    date: {type: Date, default: Date.now},
    imageUrl: String,
    idToken: String
},{
    timestamps:true
}
);

//const User = mongoose.model('User', userSchema);


//module.exports = User;