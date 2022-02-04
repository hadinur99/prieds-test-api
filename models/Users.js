const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    address: String,
    description: String,
    createdTime: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', UserSchema);