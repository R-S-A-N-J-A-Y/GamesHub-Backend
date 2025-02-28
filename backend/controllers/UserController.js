const validateUser = require("./User/validateUser")

exports.createUser = async ( req, res ) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    const isValid = await validateUser(user);
    if ( isValid ){
        // const result = await storeUser(user);
        // return res.send(result);
        res.send("success");
    }
    else{
        return res.status(404).send("Email Already exists...");
    }
}