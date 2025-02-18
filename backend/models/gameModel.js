const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: String,
    imageSrc: String,
    date: Date,
    ratings: Number,
    likes: Number,
    genres: [String],
    platforms: [String],
});

const Game = mongoose.model('games', schema);

module.exports = Game;