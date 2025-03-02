const Game = require("../models/gameModel");

exports.getGame = async ( req, res ) => {
    const result = await Game.find({});
    res.send(result);
}