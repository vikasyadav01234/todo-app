const express = require("express");

const app = express();
//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());
//import routes for TODO API

const todoRoutes = require("./routes/todos");

//mount the todo ASPI Routes
app.use("/api/v1", todoRoutes);

//start servers
app.listen(PORT, ()=>{
    console.log(`Server started succesfully`)
})