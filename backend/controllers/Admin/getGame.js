const Game = require("../../models/gameModel");

const getGame = async( data ) => {
    const res = await Game.findOne({_id: data});
    return res;
};

module.exports = getGame;