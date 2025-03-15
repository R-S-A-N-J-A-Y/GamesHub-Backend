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
    // console.log(platform);
    const result = await Game.find({ platforms: platform});
    // console.log(result);
    res.send(result);
};

// Order By 
const sortGameBy = async (req, res, orderBy) => {
    if ( orderBy === "clear" )
        return exports.getGame(req, res);
    const result = await Game.find().sort({[orderBy]: 1})
    // console.log(result);
    res.send(result);
}

// Select By Genre
const getGameByGenre = async(req, res, genre) => {
    if ( genre === "clear" )
        return exports.getGame(req, res);
    const result = await Game.find({ genres: genre });
    // console.log(result);
    res.send(result);
}

const getGameByPO = async (req, res, platform, orderBy) => {
    const result = await Game.find({ platforms: platform }).sort({[orderBy] : 1});
    return res.send(result);
}

const getGameByPG = async (req, res, platform, genre) => {
    const result = await Game.find({ platforms: platform, genres: genre });
    return res.send(result);
}

const getGameByGO = async (req, res, genre, orderBy) => {
    const result = await Game.find({ genres: genre }).sort({[orderBy]: 1});
    return res.send(result);
}

//Select By Platforms and Order
const getGameByPOG = async(req, res, orderBy, platform, genre) => {
    if ( orderBy === "clear" && platform === "clear" && genre === "clear" )
        return exports.getGame(req, res);
    else if (orderBy === "clear" && platform === "clear")
        return getGameByGenre(req, res, genre);
    else if ( orderBy === "clear" && genre === "clear" )
        return getGameByPlatform(req, res, platform);
    else if ( platform === "clear" && genre === "clear" )
        return sortGameBy(req, res, orderBy);
    else if ( orderBy === "clear" )
        return getGameByPG(req, res, platform, genre);
    else if ( platform === "clear" )
        return getGameByGO(req, res, genre, orderBy);
    else if ( genre === "clear" )
        return getGameByPO(req, res, platform, orderBy);
    const result = await Game.find({ platforms: platform, genres: genre }).sort({[orderBy] : 1});
    return res.send(result);
}

exports.getGameBy = async (req, res) => {
    let {platform, orderBy, genre} = req.query;
    console.log(platform, orderBy, genre);
    if ( !platform )
        platform = "clear";
    if ( !orderBy )
        orderBy = "clear";
    if (!genre)
        genre = "clear";
    console.log(platform, orderBy, genre);
    return getGameByPOG(req, res, orderBy, platform, genre);
}