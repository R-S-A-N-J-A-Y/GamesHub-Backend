const isUserExist = require("./User/isUserExist")
const storeUser = require("./User/storeUser");

const makeUser = (req) => {
    return { name: req.body.name, email: req.body.email, password: req.body.password };
}

exports.createUser = async ( req, res ) => {
    const user = makeUser(req);

    const isNotExist = await isUserExist(user);
    if ( isNotExist ){
        const result = await storeUser(user);
        return res.send(result);
        // res.send("success");
    }
    else{
        return res.status(404).send("Email Already exists...");
    }
}

exports.signin = async (req, res) => {
    const user = makeUser(req);

};