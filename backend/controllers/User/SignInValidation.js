const User = require("../../models/usersModel");

const Validate = async ( user ) => {
    return await User.findOne(user);
}

module.exports = Validate;