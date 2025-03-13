const Game = require("../models/gameModel");

exports.getGame = async ( req, res ) => {
    const result = await Game.find({});
    res.send(result);
}

exports.getGameBy = async (req, res) => {
    const platform = req.params.platform;
    if (platform === "clear"){
        return exports.getGame(req, res);
    }
    console.log(platform);
    const result = await Game.find({ platforms: platform});
    console.log(result);
    res.send(result);
}