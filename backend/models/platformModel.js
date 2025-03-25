const mongoose = require("mongoose");

const versionSchema = mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
});

const schema = mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    version: {
        type: [versionSchema],
        default: []
    }
}, {timestamps: true});

const Platforms = mongoose.model('platform', schema);

module.exports = Platforms;