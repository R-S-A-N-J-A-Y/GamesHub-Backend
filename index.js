const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const connectDB = require("./backend/config/dbConfig");
connectDB();

app.use("/login/admin", require("./backend/Routes/adminRoutes"));

app.listen(3000, () => {
    console.log( "Listening to the Port 3000...." );    
})