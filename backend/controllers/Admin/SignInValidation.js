const { model } = require("mongoose");
const User = require("../../models/usersModel");

const signInValidation = async ( user ) => {
    const res = await User.findOne( user );
    console.log(res);
    return res;
}

module.exports = signInValidation;