const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect( 'mongodb://localhost:27017/gamesHub' )
      .then( () => console.log("Connected to the MongoDB ...") )
      .catch( (err) => console.log( "Cannot able to Connect ", err ) );
}

module.exports = connectDB;