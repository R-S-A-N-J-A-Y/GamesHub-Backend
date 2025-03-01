const User = require("../../models/usersModel");

const isUserExist = async ( user ) => {
    const result = await User.findOne({email: user.email});
    if ( result == null )
        return true;
    return false;
}

module.exports = isUserExist;