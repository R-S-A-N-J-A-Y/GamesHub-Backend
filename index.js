const express = require('express');
const app = express();
app.use(express.json());

const connectDB = require("./backend/config/dbConfig");
connectDB();

app.use("/admin", require("./backend/Routes/adminRoutes"));

app.listen(3000, () => {
    console.log( "Listening to the Port 3000...." );    
})