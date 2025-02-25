const addData = require("./Admin/addData");
const signInValidation = require("./Admin/SignInValidation");

exports.addGame = async (req, res) => {
    const data = {
        name: req.body.name,
        imageSrc: req.body.imageSrc,
        likes: req.body.likes,
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
    res.send(result);
}