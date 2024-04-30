//import th Model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res) => {
    try{
       const {id} = req.params;
       const {title, description} =req.body;
    }
    catch(err){
       
    }
}
