const Games = require("../../../models/gameModel");
const isGameExist = require("./isGameExist");

const createGame = async ( game ) => {
    const res = await isGameExist(game);
    if ( res == null ){
        return null;
    }
    const games = new Games( game );

    const result = await games.save();
    return result;
}

module.exports = createGame;