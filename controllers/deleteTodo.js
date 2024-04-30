//import th Model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try{
       const {id} = req.params;
       await Todo.findByIdAndDelete(id);
       
    }
    catch(err){
       
    }
}
