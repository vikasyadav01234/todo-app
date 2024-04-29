const express = require("express");

const app = express();
//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;
app.listen(3000, () => {


    console.log("App is Running Successfully ")
})