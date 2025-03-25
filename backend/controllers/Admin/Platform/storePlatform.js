const Platforms = require('../../../models/platformModel');

const storePlatform = async( platform ) => {
    return await Platforms.create(platform);
}

const getPlatforms = async () => {
    return await Platforms.find({});    
}

module.exports = storePlatform;
module.exports = getPlatforms;