const Game = require("../../models/gameModel");

const isGameExist = async ( game ) => {
    const res = await Game.findOne(game);    
    if ( res )
        return null;
    return !res;
}

module.exports = isGameExist;