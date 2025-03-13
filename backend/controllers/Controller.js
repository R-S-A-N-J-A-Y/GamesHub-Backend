const Game = require("../models/gameModel");

exports.getGame = async ( req, res ) => {
    const result = await Game.find({});
    res.send(result);
}

//Select By Platforms
const getGameByPlatform = async (req, res, platform) => {
    if (platform === "clear"){
        return exports.getGame(req, res);
    }
    console.log(platform);
    const result = await Game.find({ platforms: platform});
    console.log(result);
    res.send(result);
};

// Order By 
const sortGameBy = async (req, res, orderBy) => {
    if ( orderBy === "clear" )
        return exports.getGame(req, res);
    const result = await Game.find().sort({[orderBy]: 1})
    console.log(result);
    res.send(result);
}

//Select By Platforms and Order
const getGameByPAS = async(req, res, orderBy, platform) => {
    if ( orderBy === "clear" && platform === "clear" )
        return exports.getGame(req, res);
    else if ( orderBy === "clear" )
        return getGameByPlatform(req, res, platform);
    else if ( platform === "clear" )
        return sortGameBy(req, res, orderBy);
    const result = await Game.find({ platforms: platform }).sort({[orderBy] : 1});
    return res.send(result);
}

exports.getGameBy = async (req, res) => {
    const {platform, orderBy} = req.query;
    if ( platform && orderBy )
        return getGameByPAS(req, res, orderBy, platform);
    else if ( platform )
        return getGameByPlatform(req, res, platform);
    return sortGameBy(req, res, orderBy);
}