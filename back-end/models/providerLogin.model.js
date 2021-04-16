const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerLoginSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const ProviderLogin = mongoose.model('ProviderLogin', providerLoginSchema);

module.exports = ProviderLogin;