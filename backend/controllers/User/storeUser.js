const User = require("../../models/usersModel");

const storeUser = async ( user ) => {
    const res = await User.insertOne(user);
    return res;
}

module.exports = storeUser;