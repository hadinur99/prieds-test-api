const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({

    createdTime: {
        type: Date,
        default: Date.now
    },
    site: String,
    productId: String,
    name: String,
    description: String,
    price: Number,

});

module.exports = mongoose.model('Customer', CustomerSchema);