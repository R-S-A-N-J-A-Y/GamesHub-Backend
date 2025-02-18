const Games = require("../../models/gameModel");

const addData = async ( game ) => {
    const games = new Games( game );

    const result = await games.save();
    return result;
}

module.exports = addData;