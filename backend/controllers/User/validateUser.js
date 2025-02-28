const User = require("../../models/usersModel");

const validateUser = async ( user ) => {
    const result = await User.findOne({email: user.email});
    console.log(result);
    return result;
}

module.exports = validateUser;