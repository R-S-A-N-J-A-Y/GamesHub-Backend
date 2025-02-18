const express = require('express');
const app = express();

app.use(express.json());

const connectDB = require("./backend/config/dbConfig");
const addData = require("./backend/controllers/DataOperations/addData");

connectDB();

app.post('/', async (req, res) => {
    const data = {
        name: req.body.name,
        imageSrc: req.body.imageSrc,
        likes: req.body.likes,
        genres: req.body.genres,
        Date: new Date(req.body.Date),
        platforms: req.body.platforms
    }

    const result = await addData(data);
    res.send(result);
})

app.listen(3000, () => {
    console.log( "Listening to the Port 3000...." );    
})