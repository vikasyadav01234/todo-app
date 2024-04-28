//import th Model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res) => {
    try{
        //extract title and description from request body
        const {title,description} = req.body;
        //create a new Todo Obj and insert
    }
    catch(err){

    }
}