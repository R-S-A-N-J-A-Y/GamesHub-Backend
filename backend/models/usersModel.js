const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { collection: 'Users' })

const User = mongoose.model('User', schema);

module.exports = User;