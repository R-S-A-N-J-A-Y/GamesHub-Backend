const Platforms = require('../models/platformModel');
const storePlatform = require('./Admin/Platform/storePlatform');

exports.addPlatform = async ( req, res ) => {
    const newPlatform = {
        _id: req.body._id,
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        version: req.body.version
    }

    console.log(newPlatform);

    const result = await storePlatform(newPlatform);

    res.send(result);
};

const getPlatforms = require('./Admin/Platform/storePlatform');

exports.getAllPlatforms = async ( req, res ) => {
    const result = await getPlatforms();

    const set = new Set();

    result.forEach( Platform => {
        set.add(Platform.name);
        Platform.version.forEach( version => {
            set.add(version.name);
        } )
    })

    console.log(set);
    res.json([...set]);
}