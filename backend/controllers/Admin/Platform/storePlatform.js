const Platforms = require('../../../models/platformModel');

const storePlatform = async( platform ) => {
    return await Platforms.create(platform);
}

module.exports = storePlatform;