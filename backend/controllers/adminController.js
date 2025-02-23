const addData = require("../controllers/DataOperations/addData");

exports.addGame = async (req, res) => {
    const data = {
        name: req.body.name,
        imageSrc: req.body.imageSrc,
        likes: req.body.likes,
        genres: req.body.genres,
        date: new Date(req.body.date),
        platforms: req.body.platforms
    }

    const result = await addData(data);
    res.send(result);
    // res.send(req.body);
}

exports.signin = (req, res) => {
    res.send(req.body);
}