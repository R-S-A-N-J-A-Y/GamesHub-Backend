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