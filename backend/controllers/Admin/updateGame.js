const Game = require("../../models/gameModel")

const updateGameById = async (id, gameData) => {
    const res = await Game.findByIdAndUpdate(id, gameData, {new: true});
    console.log(res);
    return res;
}

module.exports = updateGameById;