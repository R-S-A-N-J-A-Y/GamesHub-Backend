const User = require("../../models/usersModel");

const Validate = async ( user ) => {
    return await User.findOne({ email : user.email, password: user.password });
}

module.exports = Validate;