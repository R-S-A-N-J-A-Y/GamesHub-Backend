const Game = require("../../models/gameModel");

const deleteGame = async ( id ) => {
    let res = await Game.findByIdAndDelete(id);
    if ( res == null )
        return null;
    console.log(res);
    return {
        acknowledged: true,
        deletedCount: 1,
        deletedData: res,
    };
};

module.exports = deleteGame;