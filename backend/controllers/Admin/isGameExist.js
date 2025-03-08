const Game = require("../../models/gameModel");

const isGameExist = async ( game ) => {
    const res = await Game.findOne({_id: game});
    if ( res == null )
        return false;
    return true;
}

module.exports = isGameExist;