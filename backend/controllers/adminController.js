const addData = require("./Admin/addData");
const signInValidation = require("./Admin/SignInValidation");

exports.addGame = async (req, res) => {
    const data = {
        name: req.body.name,
        imageSrc: req.body.imageSrc,
        likes: 0,
        genres: req.body.genres,
        date: new Date(req.body.date),
        platforms: req.body.platforms
    }
    const result = await addData(data);
    res.send(result);
}

exports.signin = async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    }

    const result = await signInValidation(user);
    
    if ( !result )
        res.status(404).send("User not found");
    else
        res.send(result);
}