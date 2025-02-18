const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gamesHub')
  .then( () => console.log("Connected to the mongodb server...") )
  .catch( (err) => console.log( "Error Connecting to the mongodb server ", err ) );

const schema = mongoose.Schema( {
    name: String,
    imageSrc: String,
    date: Date,
    ratings: Number,
    likes: Number,
    genres: [String],
    platforms: [String],
} );

const Games = mongoose.model( 'Games', schema );


async function putData () {
    const games = new Games( {
        name: "Marvel's Spider-man Remastered",
        imageSrc : "/GamePreviews/Spiderman-Rem.jpg",
        likes: 9.2,
        genres: ["action", "adventure", "stealth", "superhero"],
        Date: 12/7/2022,
        platforms: ["ps5", "pc"]
    } )
    
    const result = await games.save();
    console.log(result);
}

putData();