const express = require("express");

const app = express();
//load config from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body
app.use(express.json());
//import routes for TODO API

const todoRoutes = re