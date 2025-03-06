const createGame = require("./Admin/createGame");
const signInValidation = require("./Admin/SignInValidation");
const getGame = require("./Admin/getGame");
const deleteGame = require("./Admin/deleteGame");

exports.addGame = async (req, res) => {
    const data = {
        name: req.body.name,
        imageSrc: req.body.imageSrc,
        likes: 0,
        genres: req.body.genres,
        date: new Date(req.body.date),
        platforms: req.body.platforms
    }

    const result = await createGame(data);
    if ( result == null ){
        res.status(400).send("Game Already Exist..");
        return;
    }
    res.send(result);
};

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
};

exports.getGameById = async ( req, res ) => {
    const id = req.params.id;
    const result = await getGame(id);
    if ( !result ){
        return res.status(400).send("Game With Specified ID is not Found.");
    }
    return res.send(result);
};

exports.deleteGameById = async ( req, res ) => {
    const id = req.params.id;
    const result = await deleteGame(id);
    if ( !result ){
        return res.status(400).send("Game With Specified ID is not Found.");
    }
    return res.send(result);
}