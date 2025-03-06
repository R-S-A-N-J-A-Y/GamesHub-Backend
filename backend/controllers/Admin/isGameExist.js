const Game = require("../../models/gameModel");

const isGameExist = async ( game ) => {
    const res = await Game.findOne(game);
    return !res;
}

module.exports = isGameExist;