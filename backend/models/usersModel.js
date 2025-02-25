const mongoose = require("mongoose");

const schema = mongoose.Schema({
    email: String,
    password: String
}, { collection: 'Users' })

const User = mongoose.model('User', schema);

module.exports = User;