 
require('dotenv').config()
const express = require("express");
const app = express();
const router = require("./routes/index.routes")

const mongoose = require('mongoose')
const cors = require('cors');


app.use(express.json())
app.use(express.urlencoded())

//connection to db
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_LINK}/${process.env.DB_NAME}`
mongoose.connect(uri,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }).then(()=>{
    console.table([{connected : "yes"}])
})
.catch((err)=>{
    console.table([{connected : "no", message :err.message}])
})

/**
 * cors, we should add AllowedOrigins if frontEnd is in different area
 */ 
app.use(cors());
/**
 * routes
 */
app.get("/", (req, res)=>{
    res.status(200).send("Welcome to Backend Server#Schtroumpf#")
})
app.use("/api", cors(), router);
exports.app= app;